import { User } from "@/types/auth";
import { axiosInstance } from "./axios";

export async function getUser() {
  const response = await axiosInstance.get<User>("/users/me");

  return response.data;
}
