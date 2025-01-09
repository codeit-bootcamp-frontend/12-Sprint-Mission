import { auth } from "@/app/api/auth/auth";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

if (typeof window === "undefined") {
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
