import styles from "./LoginForm.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginSchema, LoginRequest } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
  onSubmit: (request: LoginRequest) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      await onSubmit(data);
      reset();
    } catch (err) {
      console.error("서버오류", err);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          이메일
        </label>
        <div className={styles.inputContainer}>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            className={`${styles.inputField} ${errors.email ? styles.errorInput : ""}`}
          />
        </div>
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>
        <div className={styles.inputContainer}>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="비밀번호를 입력해주세요"
            className={`${styles.inputField} ${errors.password ? styles.errorInput : ""}`}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.toggleButton}>
            {showPassword ? "O" : "X"}
          </button>
        </div>
        {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
      </div>

      <button type="submit" className={styles.button}>
        로그인
      </button>

      <div className={styles.divider}>
        <span className={styles.dividerText}>간편 로그인하기</span>
      </div>

      <div className={styles.socialButtons}>
        <button type="button" className={styles.socialButton}>
          <Image src="/placeholder.svg" alt="Google Login" width={24} height={24} className={styles.socialImg} />
        </button>
        <button type="button" className={styles.socialButton}>
          <Image src="/placeholder.svg" alt="Kakao Login" width={24} height={24} className={styles.socialImg} />
        </button>
      </div>

      <div className={styles.prompt}>
        <span>판다마켓이 처음이신가요?</span> <Link href="/signup">회원가입</Link>
      </div>
    </form>
  );
}
