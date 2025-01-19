import Image from "next/image";
import styles from "./login.module.css";
import LogoImg from "@/assets/images/logo.svg";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/router";
import { saveTokens } from "@/utils/tokenHandler";
import { login } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (formData: { email: string; password: string }) => {
    try {
      const { accessToken, refreshToken } = await login(formData);
      saveTokens(accessToken, refreshToken);
      alert("로그인 성공!");
      router.push("/boards");
    } catch (error: any) {
      alert(error.message || "로그인 실패");
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
