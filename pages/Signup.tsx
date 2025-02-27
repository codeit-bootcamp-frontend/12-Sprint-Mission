import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./Signup.module.css";
import Link from "next/link";
import { postUserData } from "../src/api/api";
import { useRouter } from "next/router";
import Image from "next/image";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_MIN_LEN = 8;

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nickNameError, setNickNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(
    null
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  // 이메일 값 체크
  const emailCheck = (email: string): string | null => {
    if (!email.trim()) return "이메일을 입력해주세요";
    if (!emailRegex.test(email)) return "잘못된 이메일 형식입니다";

    return null;
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(emailCheck(value));
  };

  // 닉네임 값 체크
  const nickNameCheck = (nickName: string): string | null => {
    if (!nickName.trim()) return "닉네임을 입력해주세요";

    return null;
  };

  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
    setNickNameError(nickNameCheck(value));
  };

  // 비밀번호 값 체크
  const passwordCheck = (password: string): string | null => {
    if (!password.trim()) return `패스워드를 입력해주세요`;
    if (password.length < PASSWORD_MIN_LEN)
      return `패스워드를 ${PASSWORD_MIN_LEN}자 이상입력해주세요`;

    return null;
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const nextPassword = e.target.value;
    setPassword(nextPassword);
    setPasswordError(passwordCheck(nextPassword));
  };

  // 비밀번호 확인 값 체크
  const PasswordMatch = (
    password: string,
    passwordMatch: string
  ): string | null => {
    if (password !== passwordMatch) return "비밀번호가 일치하지 않습니다.";

    return null;
  };

  const onChangePasswordMatch = (e: ChangeEvent<HTMLInputElement>) => {
    const nextPasswordMatch = e.target.value;
    setPasswordMatch(nextPasswordMatch);
    setPasswordMatchError(PasswordMatch(password, nextPasswordMatch));
  };

  // 회원가입 버튼 활성화 여부 판단
  useEffect(() => {
    const isNoError =
      !emailError && !nickNameError && !passwordError && !passwordMatchError;
    const hasAllInput = email && nickName && password && passwordMatch;

    const isValidForm = isNoError && hasAllInput;

    setIsButtonDisabled(!isValidForm);
  }, [
    email,
    nickName,
    password,
    passwordMatch,
    emailError,
    nickNameError,
    passwordError,
    passwordMatchError,
  ]);

  // 비밀번호 타입 토글
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSignUp = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userData = {
      email: email,
      nickname: nickName,
      password: password,
      passwordConfirmation: passwordMatch,
    };

    try {
      const result = await postUserData(userData);

      if (result.success) {
        console.log(result);
        router.push("/");
      } else {
        alert(result.message || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/image/loginLogo.png"
            width={396}
            height={132}
            alt="로그인 페이지 판다마켓 로고"
          />
        </Link>
      </header>
      <form>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>이메일</label>
          <input
            className={`${styles.formInput} ${
              emailError === null ? "" : styles.errorInput
            }`}
            name="username"
            type="text"
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
            }}
            placeholder="이메일을 입력해주세요"
          />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>닉네임</label>
          <input
            onChange={(e) => {
              onChangeNickName(e);
            }}
            className={`${styles.formInput} ${
              nickNameError === null ? "" : styles.errorInput
            }`}
            name="nikname"
            type="text"
            value={nickName}
            placeholder="닉네임을 입력해주세요"
          />
          {nickNameError && (
            <p className={styles.errorMessage}>{nickNameError}</p>
          )}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>비밀번호</label>
          <input
            onChange={(e) => {
              onChangePassword(e);
            }}
            className={`${styles.formInput} ${
              passwordError === null ? "" : styles.errorInput
            }`}
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            placeholder="비밀번호를 입력해주세요"
          />
          <div className={styles.toggleTag}>
            <Image
              className={styles.toggleImg}
              onClick={togglePasswordVisibility}
              src={
                isPasswordVisible
                  ? "/image/btn_visibility_on.svg"
                  : "/image/btn_visibility_off.svg"
              }
              width={24}
              height={24}
              alt="비밀번호 온오프 토글 이미지"
            />
          </div>
          {passwordError && (
            <p className={styles.errorMessage}>{passwordError}</p>
          )}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>비밀번호 확인</label>
          <input
            onChange={(e) => {
              onChangePasswordMatch(e);
            }}
            className={`${styles.formInput} ${
              passwordMatchError === null ? "" : styles.errorInput
            }`}
            name="password-repeat"
            type={isPasswordVisible ? "text" : "password"}
            value={passwordMatch}
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <div className={styles.toggleTag}>
            <Image
              className={styles.toggleImg}
              onClick={togglePasswordVisibility}
              src={
                isPasswordVisible
                  ? "/image/btn_visibility_on.svg"
                  : "/image/btn_visibility_off.svg"
              }
              width={24}
              height={24}
              alt="비밀번호 온오프 토글 이미지"
            />
          </div>
          {passwordMatchError && (
            <p className={styles.errorMessage}>{passwordMatchError}</p>
          )}
        </div>
        <button
          className={`${styles.button} ${
            isButtonDisabled ? "" : styles.disabled
          }`}
          onClick={handleSignUp}
          disabled={isButtonDisabled}
          type="submit"
        >
          회원가입
        </button>
      </form>
      <div className={styles.loginBox}>
        <div>간편 로그인하기</div>
        <div className={styles.loginImgBox}>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/googleLogin.png"
              width={42}
              height={42}
              alt="구글 계정으로 로그인하는 버튼"
            />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/kakaoLogin.png"
              width={42}
              height={42}
              alt="카카오톡 계정으로 로그인하는 버튼"
            />
          </a>
        </div>
      </div>
      <div className={styles.loginLink}>
        이미 회원이신가요?
        <span>
          <Link href="/login">로그인</Link>
        </span>
      </div>
    </div>
  );
}
