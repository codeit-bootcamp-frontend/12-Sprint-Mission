import { BASE_URL } from "../constants/apiUrls";
import { handleResponseError } from "../utils/errorHandler";
import { HttpException } from "../utils/exceptions";
import { ProductDetail, CommentsResponse } from "../types";

export const fetchProducts = async (orderBy: string, pageSize: number) => {
  const params = new URLSearchParams({ orderBy, pageSize: pageSize.toString() });

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      handleResponseError(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    } else {
      console.error("네트워크 오류", error);
      throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }
};

export const fetchProductById = async (productId: number | string): Promise<ProductDetail> => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      handleResponseError(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    } else {
      console.error("네트워크 오류", error);
      throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }
};

export const fetchProductCommentById = async (
  productId: number | string,
  limit: number = 10
): Promise<CommentsResponse> => {
  const params = new URLSearchParams({ limit: limit.toString() });

  try {
    const response = await fetch(`${BASE_URL}/${productId}/comments?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      handleResponseError(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    } else {
      console.error("네트워크 오류", error);
      throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }
};
