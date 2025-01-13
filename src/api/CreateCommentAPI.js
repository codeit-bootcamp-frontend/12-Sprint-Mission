import { baseURL } from "../constants/VariableSetting";

export async function CreateCommentAPI({ productId, accessToekn }) {
  const response = await fetch(`${baseURL}/products/${productId}/comments`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToekn}`,
    },
  });

  if (!response.ok) {
    throw new Error("상품 정보를 가져오는데 실패했습니다.");
  }
  const body = await response.json();
  return body.list;
}
