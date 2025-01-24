import { baseURL } from "../constants/VariableSetting";

export async function GetProductDetailAPI({ productId = 1 }) {
  const response = await fetch(`${baseURL}/products/${productId}`);

  if (!response.ok) {
    throw new Error("상품 정보를 가져오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
