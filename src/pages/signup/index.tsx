import FormInput from "@/components/form/form-input";
import styles from "./signup.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [signupValue, setSignupValue] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.login_wrap}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/img/logo.svg" alt="로고" />
        </Link>
      </div>
      <form action="">
        <ul className={styles.login_list}>
          <li>
            <div className={styles.title}>이메일</div>
            <div className={styles.content}>
              <FormInput
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={onChange}
                value={signupValue.email}
              />
            </div>
          </li>
          <li>
            <div className={styles.title}>닉네임</div>
            <div className={styles.content}>
              <FormInput
                type="text"
                name="nickname"
                placeholder="닉네임 입력해주세요"
                onChange={onChange}
                value={signupValue.nickname}
              />
            </div>
          </li>
          <li>
            <div className={styles.title}>비밀번호</div>
            <div className={styles.content}>
              <FormInput
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={onChange}
                value={signupValue.password}
              />
            </div>
          </li>
          <li>
            <div className={styles.title}>비밀번호 확인</div>
            <div className={styles.content}>
              <FormInput
                type="password"
                name="passwordConfirmation"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                onChange={onChange}
                value={signupValue.passwordConfirmation}
              />
            </div>
          </li>
          <li>
            <button className="btn round block large" disabled={true}>
              회원가입
            </button>
          </li>
          <li>
            <div className={styles.sns}>
              <h3>간편 로그인하기</h3>
              <ul>
                <li>
                  <Link href="">
                    <img
                      src="/assets/img/icon_google.svg"
                      alt="구글 간편로그인"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <img
                      src="/assets/img/icon_kakao.svg"
                      alt="카카오 간편로그인"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles.link}>
              <p>
                이미 회원이신가요? <Link href="/login">로그인</Link>
              </p>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
