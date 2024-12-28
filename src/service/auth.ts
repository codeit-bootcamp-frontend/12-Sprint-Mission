import { axiosInstance } from "@service/axios";
import { SigninFormData, SignupFormData } from "@type/auth";

export async function login({ email, password }: SigninFormData) {
  const response = await axiosInstance.post("/auth/signIn", {
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
}: SignupFormData) {
  const response = await axiosInstance.post("/auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });

  return response.data;
}

export async function getUser() {
  const response = await axiosInstance.get("/users/me");

  return response.data;
}

export async function refreshAccessToken(refreshToken: string) {
  const response = await axiosInstance.post("/auth/refresh-token", {
    refreshToken,
  });

  return response.data;
}
