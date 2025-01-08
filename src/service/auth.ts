import { SigninFormType, SignupFormType } from "@schemas/auth";
import { axiosInstance } from "@service/axios";
import { RefreshResponse, AuthResponse, User } from "@type/auth";
import axios from "axios";

export async function login({ email, password }: SigninFormType) {
  const response = await axiosInstance.post<AuthResponse>("/auth/signIn", {
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
  const response = await axiosInstance.post<AuthResponse>("/auth/signUp", {
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
  const response = await axios.post<RefreshResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
    {
      refreshToken,
    }
  );

  return response.data;
}
