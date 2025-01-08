import { auth } from "@/app/api/auth/auth";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window === "undefined") {
      const session = await auth();
      config.headers.Authorization = `Bearer ${session?.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
