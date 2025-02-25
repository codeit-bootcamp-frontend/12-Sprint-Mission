import { auth, update } from "@/auth";
import axios from "axios";
import { getSession } from "next-auth/react";
import { refreshAccessToken } from "./auth";
import { cache } from "react";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let cachedClientAccessToken: string | null = null;

const getAccessTokenAtServer = cache(async () => {
  const session = await auth();
  return session ? session.accessToken : null;
});

const getAccessTokenAtClient = async () => {
  if (!cachedClientAccessToken) {
    const session = await getSession();
    return session ? session.accessToken : null;
  }
  return cachedClientAccessToken;
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken =
      typeof window === "undefined"
        ? await getAccessTokenAtServer()
        : await getAccessTokenAtClient();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
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
          const accessToken = await getAccessTokenByRefreshToken(
            session.refreshToken
          );

          if (accessToken !== session.accessToken) {
            cachedClientAccessToken = accessToken;
            await update({ accessToken });
            error.config.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
        return axiosInstance(error.config);
      } catch (refreshError) {
        console.error("refresh error", refreshError);
        clearCachedClientAccessToken();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

async function getAccessTokenByRefreshToken(refreshToken: string) {
  try {
    const { accessToken } = await refreshAccessToken(refreshToken);
    return accessToken;
  } catch (err) {
    throw err;
  }
}

export function clearCachedClientAccessToken() {
  cachedClientAccessToken = null;
}
