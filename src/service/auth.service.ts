import { SigninFormType, SignupFormType } from "@/service/auth.schema";
import { axiosInstance } from "@/util/axios";
import { RefreshResponse, AuthResponse } from "@/service/auth.type";
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

export async function refreshAccessToken(refreshToken: string) {
  const response = await axios.post<RefreshResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
    {
      refreshToken,
    }
  );

  return response.data;
}
