"use server";

import { editProfileFormSchmea, EditProfileFormType } from "@/schemas/user";
import { editProfileImage, uploadProfileImage } from "@/service/user";
import { isAxiosError } from "axios";

export default async function action(data: EditProfileFormType) {
  const parsed = editProfileFormSchmea.safeParse(data);

  if (!parsed.success) {
    return {
      message: "제출양식에 문제가 있습니다. 확인해주세요",
      success: false,
    };
  }
  const { image } = parsed.data;

  if (image instanceof File) {
    try {
      const { url } = await uploadProfileImage(image);
      await editProfileImage(url);

      return {
        message: "프로필 이미지 업데이트 성공",
        success: true,
      };
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          message: `프로필 이미지 업데이트 실패 : ${error.message}`,
          success: false,
        };
      }
      return {
        message: "프로필 이미지 업데이트 실패",
        success: false,
      };
    }
  } else {
    return {
      message: "이미지를 첨부해주세요",
      success: false,
    };
  }
}
