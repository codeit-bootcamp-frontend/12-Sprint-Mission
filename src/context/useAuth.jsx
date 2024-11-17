import { createContext, useContext, useEffect, useState } from "react";
import { getUser, login } from "../service/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => ({
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: null,
  }));

  useEffect(() => {
    //마운트시 토큰으로 유저정보 가져오기 (실패하면 로그아웃 처리)
    (async function getUserData() {
      if (auth.accessToken) {
        try {
          const userData = await getUser(auth.accessToken);
          setAuth((prev) => ({ ...prev, user: userData }));
        } catch (err) {
          console.log(err);
          handleLogout();
        }
      }
    })();
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const data = await login({ email, password });

      setAuth({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      });

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return true;
    } catch (err) {
      console.log(err);
      alert("로그인에 실패했습니다.");
      throw err;
    }
  }

  function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAuth({
      accessToken: null,
      refreshToken: null,
      user: null,
    });

    window.location.replace("/");
  }

  const value = {
    auth,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
