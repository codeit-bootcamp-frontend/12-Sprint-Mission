import { handleResponseError } from "./errorHandler";
import { HttpException } from "./exceptions";

export async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    if (!response.ok) {
      handleResponseError(response);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }
    console.error("네트워크 오류", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
}
