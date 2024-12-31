import { SigninFormType, SignupFormType } from "@schemas/auth";
import { axiosInstance } from "@service/axios";
import {
  RefreshResponse,
  SigninResponse,
  SignupResponse,
  User,
} from "@type/auth";

export async function login({ email, password }: SigninFormType) {
  const response = await axiosInstance.post<SigninResponse>("/auth/signIn", {
    email,
    password,
  });

  return response.data;
}

export async function signUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}: SignupFormType) {
  const response = await axiosInstance.post<SignupResponse>("/auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });

  return response.data;
}

export async function getUser() {
  const response = await axiosInstance.get<User>("/users/me");

  return response.data;
}

export async function refreshAccessToken(refreshToken: string) {
  const response = await axiosInstance.post<RefreshResponse>(
    "/auth/refresh-token",
    {
      refreshToken,
    }
  );

  return response.data;
}
