import { baseURL } from "../constants/VariableSetting";

type SignInParams = {
  Email: string;
  Password: string;
};

export async function SignInAPI({ Email, Password }: SignInParams) {
  console.log("API로 전달된 값 확인: ", Email, Password);
  const response = await fetch(`${baseURL}/auth/signIn`, {
    method: "POST",
    body: JSON.stringify({ email: `${Email}`, password: `${Password}` }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("로그인 실패");
  }
  const body = await response.json();
  return body.accessToken;
}
