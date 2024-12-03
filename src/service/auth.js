import axios from "@service/axios";

export async function login({ email, password }) {
  const response = await axios.post("/auth/signIn", {
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
}) {
  const response = await axios.post("/auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });

  return response.data;
}

export async function refreshAccessToken(refreshToken) {
  const response = await axios.post("/auth/refresh-token", {
    refreshToken,
  });

  return response.data;
}

export async function getUser() {
  const response = await axios.get("/users/me");

  return response.data;
}
