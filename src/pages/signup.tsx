import Image from "next/image";
import styles from "./signup.module.css";
import LogoImg from "@/assets/images/logo.svg";
import SignUpForm from "@/components/SignUpForm";
import { useRouter } from "next/router";
import { signup } from "@/services/authService";
import { saveTokens } from "@/utils/tokenHandler";
import { SignupRequest } from "@/types";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async (signupRequest: SignupRequest) => {
    try {
      // 1) 회원가입 요청
      const { accessToken, refreshToken } = await signup(signupRequest);

      // 2) 응답 받은 토큰 저장
      saveTokens(accessToken, refreshToken);

      // 3) 이후 페이지 이동
      alert("회원가입 성공");
      router.push("/boards");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "회원가입 오류");
      } else {
        alert("회원가입 오류");
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
      <SignUpForm onSubmit={handleSignup} />
    </div>
  );
}
