import Head from "next/head";
import LoginForm from "../../components/login/LoginForm";

function LoginPage() {
  return (
    <>
      <Head>
        <title>로그인 - 판다마켓</title>
      </Head>
      <LoginForm />
    </>
  );
}

export default LoginPage;
