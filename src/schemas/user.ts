import { z } from "zod";
import { AUTH_VALIDATION_MESSAGES as MESSAGE } from "@constants/message";
import { ACCEPT_FILE_TYPES, MAX_FILE_SIZE } from "@/constants/file";

export const changePasswordFormSchema = z
  .object({
    password: z
      .string()
      .nonempty({ message: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
    newPassword: z
      .string()
      .nonempty({ message: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
    newPasswordConfirmation: z
      .string()
      .nonempty({ message: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    path: ["newPasswordConfirmation"],
    message: MESSAGE.PASSWORD_MISMATCH,
  });

export type ChangePasswordFormType = z.infer<typeof changePasswordFormSchema>;

const imageFile = z
  .instanceof(File)
  .refine(
    (file) => {
      return file.size <= MAX_FILE_SIZE;
    },
    {
      message: `${MESSAGE.INVALID_IMAGE_SIZE} (${
        MAX_FILE_SIZE / 1024 / 1024
      }MB 초과)`,
    }
  )
  .refine(
    (file) => {
      return ACCEPT_FILE_TYPES.includes(file.type);
    },
    { message: MESSAGE.INVALID_IMAGE_TYPE }
  );

export const editProfileFormSchmea = z.object({
  image: z.union([imageFile, z.string()]).optional(),
});

export type EditProfileFormType = z.infer<typeof editProfileFormSchmea>;
