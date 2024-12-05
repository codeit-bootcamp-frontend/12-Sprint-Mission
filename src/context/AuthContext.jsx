import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getUser, login, refreshAccessToken } from "@service/auth";
import { isTokenValid } from "@util/helper";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => ({
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: null,
  }));

  const refreshRef = useRef(false);

  useEffect(() => {
    if (!auth.accessToken) return;

    (async function tokenCheck() {
      if (!isTokenValid(auth.accessToken)) {
        const { accessToken } = await refreshAccessToken(auth.refreshToken);
        localStorage.setItem("accessToken", accessToken);
        setAuth((prev) => ({ ...prev, accessToken }));
      }

      refreshRef.current = true;
    })();
  }, []);

  useEffect(() => {
    if (!refreshRef.current || !auth.accessToken) return;

    (async function getUserData() {
      try {
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

  function clear() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAuth({
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
