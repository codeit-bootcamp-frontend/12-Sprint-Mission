import { createContext, useContext, useState } from "react";
import { redirect } from "react-router-dom";
import { login } from "../service/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => ({
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  }));

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
      localStorage.setItem("user", JSON.stringify(data.user));

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
    localStorage.removeItem("user");

    setAuth({
      accessToken: null,
      refreshToken: null,
      user: null,
    });

    redirect("/");
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
