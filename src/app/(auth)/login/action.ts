"use server";

import { signIn } from "@/auth";
import { signinFormSchmea, SigninFormType } from "@/schemas/auth";
import { CredentialsSignin } from "next-auth";

export default async function action(data: SigninFormType) {
  const parsed = signinFormSchmea.safeParse(data);

  if (!parsed.success) {
    return {
      message: "제출양식에 문제가 있습니다. 확인해주세요",
      success: false,
    };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });

    return {
      message: "로그인 성공",
      success: true,
    };
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        message: `로그인 실패 : ${error.code}`,
        success: false,
      };
    }

    return {
      message: `로그인 실패`,
      success: false,
    };
  }
}
