"use server";

import {
  changePasswordFormSchema,
  ChangePasswordFormType,
} from "@/schemas/user";
import { changeUserPassword } from "@/service/user";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";

export default async function action(data: ChangePasswordFormType) {
  const parsed = changePasswordFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      message: "제출양식에 문제가 있습니다. 확인해주세요",
      success: false,
    };
  }
  const { password, newPassword, newPasswordConfirmation } = parsed.data;

  try {
    await changeUserPassword({
      password,
      newPassword,
      newPasswordConfirmation,
    });

    revalidatePath("/mypage");

    return {
      message: "비밀번호 수정 성공",
      success: true,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      const message =
        error.response?.data.message || "알 수 없는 에러가 발생했어요.";
      return {
        message: `비밀번호 수정 실패 : ${message}`,
        success: false,
      };
    }

    return {
      message: "비밀번호 수정 실패",
      success: false,
    };
  }
}
