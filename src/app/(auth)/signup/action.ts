"use server";

import { signupFormSchema } from "@/schemas/auth";
import { signUp } from "@/service/auth";
import { isAxiosError } from "axios";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export default async function action(
  prevState: { message: string },
  formData: FormData
) {
  const parsed = signupFormSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      message: "제출양식에 문제가 있습니다. 확인해주세요",
    };
  }

  try {
    await signUp({
      email: parsed.data.email,
      nickname: parsed.data.nickname,
      password: parsed.data.password,
      passwordConfirmation: parsed.data.passwordConfirmation,
    });

    redirect("/login");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (isAxiosError(error)) {
      const message =
        error.response?.data.message || "알 수 없는 에러가 발생했어요.";
      return {
        message: `회원가입 실패 : ${message}`,
      };
    }
  }

  return {
    message: "회원가입 성공",
  };
}
