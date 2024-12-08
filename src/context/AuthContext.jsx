import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getUser, login, refreshAccessToken, signUp } from "@service/auth";
import { isTokenValid } from "@util/helper";
import { axiosInstance } from "@service/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => ({
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: null,
  }));

  // request interceptor : access토큰이 변경될때마다, 요청 헤더에 토큰 심어주기
  useEffect(() => {
    if (!auth.accessToken) return;

    const authInterceptor = axiosInstance.interceptors.request.use(
      async function (config) {
        if (!config._retry && auth.accessToken) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }

        return config;
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(authInterceptor);
    };
  }, [auth.accessToken]);

  // response interceptor : 응답 실패시 토큰 재발급
  useEffect(() => {
    if (!auth.refreshToken) return;

    const refreshInterceptor = axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response?.status === 401) {
          try {
            error.config._retry = true;
            const accessToken = await handleRrefreshToken();
            error.config.headers.Authorization = `Bearer ${accessToken}`;

            return axiosInstance(error.config);
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
  }, []);

  // access토큰이 변경될때마다, 유저정보 가져와서 업데이트
  useEffect(() => {
    if (!auth.accessToken) return;

    (async function getUserData() {
      try {
        // 토큰이 만료되었으면 재발급후 종료 (다시 이 effect가 호출되어서 유저정보를 가져옴)
        if (!isTokenValid(auth.accessToken)) {
          return await handleRrefreshToken();
        }

        const user = await getUser();
        setAuth((prev) => ({ ...prev, user }));
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error(err);
          clear();
        }
      }
    })();
  }, [auth.accessToken]);

  async function handleRrefreshToken() {
    try {
      const { accessToken } = await refreshAccessToken(auth.refreshToken);
      localStorage.setItem("accessToken", accessToken);
      setAuth((prev) => ({ ...prev, accessToken }));

      return accessToken;
    } catch (err) {
      clear();
      throw err;
    }
  }

  async function handleLogin({ email, password }) {
    try {
      const { user, accessToken, refreshToken } = await login({
        email,
        password,
      });

      setAuth({ user, accessToken, refreshToken });

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return user;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async function handleSignup(formData) {
    return signUp(formData);
  }

  function clear() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAuth({
      accessToken: null,
      refreshToken: null,
      user: null,
    });
  }

  function handleLogout() {
    clear();
    window.location.replace("/");
  }

  const value = {
    auth,
    handleLogin,
    handleLogout,
    handleSignup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
