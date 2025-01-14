import { BASE_URL } from "../../constants/apiUrls";
import { ProductDetail, CommentsResponse, ProductListResponse } from "./product.types";
import { apiRequest } from "../../utils/apiClient";

export const fetchProducts = async (orderBy: string, pageSize: number) => {
  const params = new URLSearchParams({ orderBy, pageSize: pageSize.toString() });

  return apiRequest<ProductListResponse>(`${BASE_URL}?${params.toString()}`);
};

export async function fetchProductById(productId: number | string | undefined) {
  return apiRequest<ProductDetail>(`${BASE_URL}/${productId}`);
}

export async function fetchProductCommentById(productId: number | string | undefined, limit: number = 10) {
  const params = new URLSearchParams({ limit: limit.toString() });

  return apiRequest<CommentsResponse>(`${BASE_URL}/${productId}/comments?${params.toString()}`);
}
