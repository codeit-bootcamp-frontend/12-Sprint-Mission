import Head from "next/head";
import RegistrationForm from "../../components/signup/SignUpForm";

function RegistrationPage() {
  return (
    <>
      <Head>
        <title>회원가입 - 판다마켓</title>
      </Head>
      <RegistrationForm />;
    </>
  );
}

export default RegistrationPage;
