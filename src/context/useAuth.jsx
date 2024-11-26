import { createContext, useContext, useEffect, useState } from "react";
import { getUser, login, refreshAccessToken } from "@service/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => ({
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: null,
  }));

  useEffect(() => {
    if (!auth.accessToken) return;
    (async function getUserData() {
      try {
        const userData = await getUser(auth.accessToken);
        setAuth((prev) => ({ ...prev, user: userData }));
      } catch (err) {
        if (err.status === 401 && auth.refreshToken) {
          await handleRefreshToken();
        } else {
          console.log(err);
          clear();
        }
      }
    })();
  }, [auth.accessToken]);

  async function handleRefreshToken() {
    try {
      const { accessToken: newAccessToken } = await refreshAccessToken(
        auth.refreshToken
      );

      localStorage.setItem("accessToken", newAccessToken);
      setAuth((prev) => ({ ...prev, accessToken: newAccessToken }));

      return newAccessToken;
    } catch (err) {
      console.log(err);
      clear();
    }
  }

  async function handleLogin({ email, password }) {
    try {
      const { user, accessToken, refreshToken } = await login({
        email,
        password,
      });

      setAuth({
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user,
      });

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return user;
    } catch (err) {
      console.error(err);
      throw err;
    }
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

  async function asyncWithAuth(asyncFn, data) {
    try {
      return await asyncFn(data, auth.accessToken);
    } catch (err) {
      if (err.status === 401 && auth.refreshToken) {
        try {
          const newAccessToken = await handleRefreshToken();
          return await asyncFn(data, newAccessToken);
        } catch (refreshErr) {
          console.error("리프레시 요청 실패");
          clear();
          throw refreshErr;
        }
      } else {
        console.error(err);
        throw err;
      }
    }
  }

  const value = {
    auth,
    handleLogin,
    handleLogout,
    asyncWithAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
