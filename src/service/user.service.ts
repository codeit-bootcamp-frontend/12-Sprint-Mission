import { User } from "@/service/auth.type";
import { axiosInstance } from "../util/axios";
import { Product } from "@/service/product.type";
import { PaginationResponse } from "@/types/common";
import { Article, ImageUploadResponse } from "@/service/article.type";

export async function getUser() {
  const response = await axiosInstance.get<User>("/users/me");

  return response.data;
}

export async function getUserActivity() {
  const [productsResponse, favoritesResponse] = await Promise.all([
    axiosInstance.get<Pick<PaginationResponse<Product>, "totalCount">>(
      "/users/me/products"
    ),
    axiosInstance.get<
      Pick<PaginationResponse<Product | Article>, "totalCount">
    >("/users/me/favorites"),
  ]);

  return {
    products: productsResponse.data,
    favorites: favoritesResponse.data,
  };
}

export async function changeUserPassword({
  password,
  newPassword,
  newPasswordConfirmation,
}: {
  password: string;
  newPassword: string;
  newPasswordConfirmation: string;
}) {
  const response = await axiosInstance.patch<User>("/users/me/password", {
    passwordConfirmation: newPasswordConfirmation,
    password: newPassword,
    currentPassword: password,
  });

  return response.data;
}

export async function uploadProfileImage(file: File) {
  const imgFormData = new FormData();
  imgFormData.append("image", file);

  const response = await axiosInstance.post<ImageUploadResponse>(
    "/images/upload",
    imgFormData
  );

  return response.data;
}

export async function editProfileImage(image: string) {
  const response = await axiosInstance.patch<User>("/users/me", {
    image,
  });

  return response.data;
}
