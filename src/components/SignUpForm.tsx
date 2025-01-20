import { useState } from "react";
import styles from "./SignUpForm.module.css";
import Image from "next/image";
import Link from "next/link";

interface SignUpFormProps {
  onSubmit: (formData: {
    email: string;
    nickname: string;
    password: string;
    passwordConfirmation: string;
  }) => Promise<void>;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await onSubmit({
      email,
      nickname,
      password,
      passwordConfirmation,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          이메일
        </label>
        <div className={styles.inputContainer}>
          <input
            value={email}
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            className={styles.inputField}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="nickname">
          닉네임
        </label>
        <div className={styles.inputContainer}>
          <input
            value={nickname}
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            className={styles.inputField}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>
        <div className={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="비밀번호를 입력해주세요"
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.toggleButton}>
            {showPassword ? "O" : "X"}
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="confirmPassword">
          비밀번호 확인
        </label>
        <div className={styles.inputContainer}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            className={styles.inputField}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.toggleButton}
          >
            {showConfirmPassword ? "O" : "X"}
          </button>
        </div>
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
