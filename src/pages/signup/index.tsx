import FormInput from "@/components/form/form-input";
import styles from "./signup.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Instance, { axios } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [signupValue, setSignupValue] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSignupSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, nickname, password, passwordConfirmation } = signupValue;

    if (!email || !nickname || !password || !passwordConfirmation) {
      alert("모든 필드를 채워주세요.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (password.length < 8) {
      alert("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }
    if (password !== passwordConfirmation) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await Instance.post("/auth/signUp", {
        email,
        nickname,
        password,
        passwordConfirmation,
      });
      alert("회원가입이 성공적으로 완료되었습니다!");
      setSignupValue({
        email: "",
        nickname: "",
        password: "",
        passwordConfirmation: "",
      });
      router.push("/login");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        console.error("서버 응답 상태 코드:", error.response.status);
        console.error("서버 응답 데이터:", error.response.data);
        alert(error.response.data.message || "회원가입에 실패했습니다.");
      } else {
        console.error("알 수 없는 오류:", error);
        alert("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className={styles.login_wrap}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/img/logo.svg" alt="로고" />
        </Link>
      </div>
      <form onSubmit={onSignupSubmit}>
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
            <button className="btn round block large" disabled={false}>
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
