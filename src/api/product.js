import { BASE_URL } from "../constants/apiUrls";
import { handleResponseError } from "../utils/errorHandler";
import { HttpException } from "../utils/exceptions";

export const fetchProducts = async (orderBy, pageSize) => {
  const params = new URLSearchParams({ orderBy, pageSize });

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

export const fetchProductById = async (productId) => {
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

export const fetchProductCommentById = async (productId, limit = 10) => {
  const params = new URLSearchParams({ limit: limit });

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
