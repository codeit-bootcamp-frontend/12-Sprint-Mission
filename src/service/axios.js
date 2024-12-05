import axios from "axios";
import { refreshAccessToken } from "./auth";

const { VITE_API_URL } = import.meta.env;

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

// 리프래시 토큰으로 재발급 과정에서 위의 인스턴스를 사용하면 무한루프가 일어난다.
// (리프래시 토큰을 재발급 받는 과정에서 또 토큰 체크를 하고 또 재발급 요청을 하게 되므로)
export const refreshInstance = axios.create({
  baseURL: VITE_API_URL,
});

const controllers = new Map();

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const requestIdentifier = `${config.url}_${config.method}`;
    if (controllers.has(requestIdentifier)) {
      const controller = controllers.get(requestIdentifier);
      controller.abort();
    }

    const newController = new AbortController();
    config.signal = newController.signal;
    controllers.set(requestIdentifier, newController);

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // 성공한 요청에 대한 컨트롤러 제거
    const requestIdentifier = `${response.config.url}_${response.config.method}`;
    controllers.delete(requestIdentifier);

    return response;
  },
  async function (error) {
    // error의 config, response가 없으면 바로 에러 전달
    if (!error.config || !error.response) {
      return Promise.reject(error);
    }

    // 실패한 요청에 대한 컨트롤러 제거
    const requestIdentifier = `${error.config.url}_${error.config.method}`;
    controllers.delete(requestIdentifier);

    // abort된 요청이면, 토큰 재발급 없이 에러 전달
    if (error.name === "CanceledError") {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !error.config._retry) {
      try {
        error.config._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");
        const { accessToken } = await refreshAccessToken(refreshToken);
        localStorage.setItem("accessToken", accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        // 재발급 성공후 본래의 요청 config를 사용해서 재요청
        return axiosInstance(error.config);
      } catch (refreshError) {
        // 재발급 실패하면 토큰 전부 삭제후, '재발급 실패'의 에러 전달
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
