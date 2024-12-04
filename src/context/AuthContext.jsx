import { createContext, useContext, useEffect, useState } from "react";
import { getUser, login } from "@service/auth";

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
        if (err.name !== "CanceledError") {
          //abort로 취소되어서 날아온 err에는 clear하지않도록 방어
          console.error(err);
          clear();
        }
      }
    })();
  }, []);

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
