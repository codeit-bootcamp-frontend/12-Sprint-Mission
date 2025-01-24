"use server";

import { signupFormSchema, SignupFormType } from "@/schemas/auth";
import { signUp } from "@/service/auth";
import { isAxiosError } from "axios";

export default async function action(data: SignupFormType) {
  const parsed = signupFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      message: "제출양식에 문제가 있습니다. 확인해주세요",
      success: false,
    };
  }

  try {
    await signUp({
      email: parsed.data.email,
      nickname: parsed.data.nickname,
      password: parsed.data.password,
      passwordConfirmation: parsed.data.passwordConfirmation,
    });

    return {
      message: "회원가입 성공",
      success: true,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        error.response?.data.message || "알 수 없는 에러가 발생했어요.";
      return {
        message: `회원가입 실패 : ${message}`,
        success: false,
      };
    }

    return {
      message: "회원가입 실패",
      success: false,
    };
  }
}
