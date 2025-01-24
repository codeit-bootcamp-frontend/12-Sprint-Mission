import React, { useState } from "react";
import { SignInAPI } from "../../api/SignInAPI";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async (email: string, password: string) => {
    try {
      const data = await SignInAPI({
        Email: email,
        Password: password,
      });
      console.log("response 확인: ", data);
    } catch (error) {
      console.error("로그인 실패: ", error); // 콘솔 로그로 에러를 출력
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const clickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    signIn(email, password);
  };

  return (
    <div>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <input
        id="password"
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button onClick={clickLogin}>로그인</button>
    </div>
  );
}

export default Login;
