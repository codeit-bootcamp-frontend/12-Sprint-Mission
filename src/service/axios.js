import axios from "axios";
import { refreshAccessToken } from "./auth";

const { VITE_API_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_API_URL,
});

const controllers = new Map();

instance.interceptors.request.use(
  function (config) {
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

instance.interceptors.response.use(
  function (response) {
    const requestIdentifier = `${response.config.url}_${response.config.method}`;
    controllers.delete(requestIdentifier);

    return response;
  },
  async function (error) {
    // 1. abort된 응답 처리
    if (error.name === "CanceledError") {
      return Promise.reject(error);
    }

    // 2. error.config가 없는 케이스 (네트워크 오류, 타임아웃, cors, 요청취소등 - 요청취소는 에러를 안보내도록 위에서 처리함)
    if (!error.config) {
      return Promise.reject(error);
    }

    // (2번을 통과했으면 abort controller모은 Map에서 삭제시켜주기)
    const requestIdentifier = `${error.config.url}_${error.config.method}`;
    controllers.delete(requestIdentifier);

    // 3. error.response가 없는 경우 (서버에서 응답이 없는 경우)
    if (!error.response) {
      return Promise.reject(error);
    }

    // 4. 1~3번을 다 통과한 요청만 토큰 재발급
    if (error.response.status === 401 && !error.config._retry) {
      try {
        error.config._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");
        const { accessToken } = await refreshAccessToken(refreshToken);
        localStorage.setItem("accessToken", accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        // 재발급 성공후 본래의 요청 config를 사용해서 재요청
        return instance(error.config);
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

export default instance;
