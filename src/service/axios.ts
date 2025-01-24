import { auth, update } from "@/auth";
import axios from "axios";
import { getSession } from "next-auth/react";
import { refreshAccessToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session =
      typeof window === "undefined" ? await auth() : await getSession();
    const accessToken = session?.accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response?.status === 401 && !error.config._retry) {
      try {
        error.config._retry = true;

        const session =
          typeof window === "undefined" ? await auth() : await getSession();

        const refreshToken = session?.refreshToken;
        if (refreshToken) {
          const accessToken = await handleRrefreshToken(session.refreshToken);

          if (accessToken !== session.accessToken) {
            await update({ accessToken });
            error.config.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
        return axiosInstance(error.config);
      } catch (refreshError) {
        console.error("refresh error", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

async function handleRrefreshToken(refreshToken: string) {
  try {
    const { accessToken } = await refreshAccessToken(refreshToken);
    return accessToken;
  } catch (err) {
    throw err;
  }
}
