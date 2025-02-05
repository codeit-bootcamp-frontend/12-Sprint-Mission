import { baseURL } from "../constants/VariableSetting";

export async function GetProductComments({ productId = 1 }) {
  const response = await fetch(
    `${baseURL}/products/${productId}/comments?limit=10`
  );

  if (!response.ok) {
    throw new Error("코멘트 정보를 가져오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
