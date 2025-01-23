import { z } from "zod";
import { AUTH_VALIDATION_MESSAGES as MESSAGE } from "@constants/message";

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
