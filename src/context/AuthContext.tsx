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

  // request inetercepotr : 요청 헤더에 토큰 넣기
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

  useEffect(() => {
    if (!data?.refreshToken) return;

    const refreshInterceptor = axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (
          error.response?.status === 401 &&
          !error.config._retry &&
          data?.refreshToken
        ) {
          try {
            error.config._retry = true;
            const accessToken = await handleRrefreshToken(data.refreshToken);
            await update({ accessToken });
          } catch (refreshError) {
            console.log("refresh error", refreshError);
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
    return () => {
      axiosInstance.interceptors.response.eject(refreshInterceptor);
    };
  }, [data?.refreshToken, update]);

  // 유저 데이터 요청
  useEffect(() => {
    if (status !== "authenticated" || user) return;

    (async function fetchUser() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    })();
  }, [status, user]);

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
