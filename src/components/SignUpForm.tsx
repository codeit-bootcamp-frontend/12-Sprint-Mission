import { useState } from "react";
import styles from "./SignUpForm.module.css";
import Image from "next/image";
import Link from "next/link";
import { signupSchema, SignupRequest } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SignUpFormProps {
  onSubmit: (request: SignupRequest) => Promise<void>;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupRequest>({
    resolver: zodResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onFormSubmit: SubmitHandler<SignupRequest> = async (data) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error("서버 오류:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
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
        <label className={styles.label} htmlFor="nickname">
          닉네임
        </label>
        <div className={styles.inputContainer}>
          <input
            {...register("nickname")}
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            className={`${styles.inputField} ${errors.nickname ? styles.errorInput : ""}`}
          />
        </div>
        {errors.nickname && <p className={styles.errorMessage}>{errors.nickname.message}</p>}
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

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="passwordConfirmation">
          비밀번호 확인
        </label>
        <div className={styles.inputContainer}>
          <input
            {...register("passwordConfirmation")}
            type={showConfirmPassword ? "text" : "password"}
            id="passwordConfirmation"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            className={`${styles.inputField} ${errors.passwordConfirmation ? styles.errorInput : ""}`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.toggleButton}
          >
            {showConfirmPassword ? "O" : "X"}
          </button>
        </div>
        {errors.passwordConfirmation && <p className={styles.errorMessage}>{errors.passwordConfirmation.message}</p>}
      </div>

      <button type="submit" className={styles.button}>
        회원가입
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
        <span>이미 회원이신가요? </span>
        <Link href="/login">로그인</Link>
      </div>
    </form>
  );
}
