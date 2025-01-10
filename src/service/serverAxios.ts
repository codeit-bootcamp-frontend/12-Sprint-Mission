"use server";

import { auth } from "@/auth";
import { axiosInstance } from "./axios";

export async function initServerInterceptor() {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const session = await auth();
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session?.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
