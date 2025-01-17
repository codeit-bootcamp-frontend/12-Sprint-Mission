"use server";

import { signIn } from "@/auth";
import { signinFormSchmea } from "@/schemas/auth";
import { CredentialsSignin } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
export default async function action(
  prevState: { message: string },
  formData: FormData
) {
  const parsed = signinFormSchmea.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      message: "제출양식에 문제가 있습니다. 확인해주세요",
    };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });
    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof CredentialsSignin) {
      return {
        message: `로그인 실패 : ${error.code}`,
      };
    }
  }

  return {
    message: "로그인 성공",
  };
}
