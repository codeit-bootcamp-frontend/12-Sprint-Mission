import styles from "./LoginForm.module.css";
import Input from "@/components/Input";
import { useState } from "react";

export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>이메일</label>
        <Input
          className={styles.input}
          name="email"
          value={values.email}
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>비밀번호</label>
        <Input
          className={styles.input}
          name="password"
          value={values.password}
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
        />
      </div>
      <button className={styles.btn} type="submit" disabled>
        로그인
      </button>
    </div>
  );
}
