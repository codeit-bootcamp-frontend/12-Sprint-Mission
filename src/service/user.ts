import { User } from "@/types/auth";
import { axiosInstance } from "./axios";
import { Product } from "@/types/product";
import { PaginationResponse } from "@/types/common";
import { Article } from "@/types/article";

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