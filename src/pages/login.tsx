import Image from "next/image";
import styles from "./login.module.css";
import LogoImg from "@/assets/images/logo.svg";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/router";
import { saveTokens } from "@/utils/tokenHandler";
import { login } from "@/services/authService";
import { LoginRequest } from "@/types";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("ACCESS_TOKEN_KEY");
      if (accessToken) {
        router.replace("/");
      }
    }
  }, [router]);

  const handleLogin = async (loginRequest: LoginRequest) => {
    try {
      const { accessToken, refreshToken } = await login(loginRequest);
      saveTokens(accessToken, refreshToken);
      alert("로그인 성공!");
      router.push("/boards");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "로그인 실패");
      } else {
        alert("로그인 실패");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={LogoImg || "/placeholder.svg"}
          alt="Panda Market Logo"
          width={200}
          height={80}
          className={styles.logo}
        />
      </div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
