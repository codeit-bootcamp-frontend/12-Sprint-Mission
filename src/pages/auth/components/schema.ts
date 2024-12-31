import { AUTH_VALIDATION_MESSAGES as MESSAGE } from "@util/validation";
import { z } from "zod";

export const signupFormSchema = z
  .object({
    email: z
      .string({ required_error: MESSAGE.EMAIL_REQUIRED })
      .email({ message: MESSAGE.INVALID_EMAIL }),
    nickname: z.string({ required_error: MESSAGE.USERNAME_REQUIRED }),
    password: z
      .string({ required_error: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
    passwordConfirmation: z
      .string({ required_error: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: MESSAGE.PASSWORD_MISMATCH,
  });

export const signinFormSchmea = z.object({
  email: z
    .string({ required_error: MESSAGE.EMAIL_REQUIRED })
    .email({ message: MESSAGE.INVALID_EMAIL }),
  password: z
    .string({ required_error: MESSAGE.PASSWORD_REQUIRED })
    .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
});
