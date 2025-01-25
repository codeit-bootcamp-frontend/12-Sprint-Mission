import styles from "./LoginForm.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LoginRequest } from "@/types";

interface LoginFormProps {
  onSubmit: (request: LoginRequest) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setFrom] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFrom((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          이메일
        </label>
        <div className={styles.inputContainer}>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            className={styles.inputField}
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>
        <div className={styles.inputContainer}>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="비밀번호를 입력해주세요"
            className={styles.inputField}
            value={form.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.toggleButton}>
            {showPassword ? "O" : "X"}
          </button>
        </div>
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
