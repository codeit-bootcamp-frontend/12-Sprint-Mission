import axios from "axios";
import { refreshAccessToken } from "./auth";

const { VITE_API_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_API_URL,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const refreshToken = localStorage.getItem("refreshToken");

    // abortcontroller에 의해 생긴 에러인 경우
    if (error.name === "CanceledError") {
      return Promise.reject(error);
    }

    // 재시도 하는경우
    if (error.config._retry) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && refreshToken) {
      error.config._retry = true;
      try {
        const { accessToken } = await refreshAccessToken(refreshToken);
        localStorage.setItem("accessToken", accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        return instance(error.config);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
