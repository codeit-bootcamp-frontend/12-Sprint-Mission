import { AUTH_VALIDATION_MESSAGES as MESSAGE } from "@util/validation";
import { z } from "zod";

export const signupFormSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: MESSAGE.EMAIL_REQUIRED })
      .email({ message: MESSAGE.INVALID_EMAIL }),
    nickname: z.string().nonempty({ message: MESSAGE.USERNAME_REQUIRED }),
    password: z
      .string()
      .nonempty({ message: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
    passwordConfirmation: z
      .string()
      .nonempty({ message: MESSAGE.PASSWORD_REQUIRED })
      .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: MESSAGE.PASSWORD_MISMATCH,
  });

export type SigninFormType = z.infer<typeof signinFormSchmea>;

export const signinFormSchmea = z.object({
  email: z
    .string()
    .nonempty({ message: MESSAGE.EMAIL_REQUIRED })
    .email({ message: MESSAGE.INVALID_EMAIL }),
  password: z
    .string()
    .nonempty({ message: MESSAGE.PASSWORD_REQUIRED })
    .min(8, { message: MESSAGE.PASSWORD_MIN_LENGTH }),
});

export type SignupFormType = z.infer<typeof signupFormSchema>;
