import {
  signinFormSchmea,
  signupFormSchema,
} from "src/pages/auth/components/schema";
import { z } from "zod";

export type User = {
  updatedAt: string;
  createdAt: string;
  image: string;
  nickname: string;
  id: number;
};

export type SigninFormType = z.infer<typeof signinFormSchmea>;

export type SigninResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type SignupFormType = z.infer<typeof signupFormSchema>;

export type SignupResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type RefreshResponse = {
  accessToken: string;
};
