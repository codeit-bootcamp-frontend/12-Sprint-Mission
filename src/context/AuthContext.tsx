"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "@type/auth";
import { getUser, refreshAccessToken } from "@/service/auth";
import { useSession } from "next-auth/react";
import { axiosInstance } from "@/service/axios";

type AuthContextProps = {
  user: User | null;
};

const AuthContext = createContext<AuthContextProps | null>(null);

async function handleRrefreshToken(refreshToken: string) {
  try {
    const { accessToken } = await refreshAccessToken(refreshToken);
    return accessToken;
  } catch (err) {
    throw err;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const { data, status, update } = useSession();

  // request inetercepotr : 요청 헤더에 토큰 넣기 (client)
  useEffect(() => {
    if (status !== "authenticated" || !data.accessToken) return;

    const authInterceptor = axiosInstance.interceptors.request.use(
      async function (config) {
        if (data?.accessToken) {
          config.headers.Authorization = `Bearer ${data.accessToken}`;
        }

        return config;
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(authInterceptor);
    };
  }, [status, data?.accessToken]);

  // response interceptor : 응답 실패시 재발급
  useEffect(() => {
    if (!data?.refreshToken) return;

    const refreshInterceptor = axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response?.status === 401 && !error.config._retry) {
          try {
            error.config._retry = true;
            const accessToken = await handleRrefreshToken(data.refreshToken);

            if (accessToken !== data.accessToken) {
              // next-auth jwt callback 호출 (trigger === "update" 조건)
              await update({ accessToken });
              error.config.headers.Authorization = `Bearer ${accessToken}`;
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
    return () => {
      axiosInstance.interceptors.response.eject(refreshInterceptor);
    };
  }, [data?.refreshToken, data?.accessToken, update]);

  // 유저 데이터 요청
  useEffect(() => {
    if (status !== "authenticated" || !data?.accessToken || user) return;

    (async function fetchUser() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    })();
  }, [status, data?.accessToken, user]);

  const value = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내부에서만 사용가능합니다.");
  }

  return context;
}
