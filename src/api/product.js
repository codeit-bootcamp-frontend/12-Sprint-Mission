import { BASE_URL } from "../constants/apiUrls";
import { handleResponseError } from "../utils/errorHandler";

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
    console.error("네트워크 오류", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
