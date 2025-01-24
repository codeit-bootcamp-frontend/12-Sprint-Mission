import { CommentDataProps, ProductDataProps } from "../api/types";
const BASE_URL = "https://panda-market-api.vercel.app";

// 베스트/전체 상품 리스트
export async function getProductData(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

// 디테일 상품 정보
export async function getProductId(
  productId: string | string[],
  setProductData: React.Dispatch<
    React.SetStateAction<ProductDataProps | undefined>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const response = await fetch(`${BASE_URL}/products/${productId}`);

  try {
    const body = await response.json();
    setProductData(body);
  } catch (error) {
    console.log(error);
  }

  if (!response.ok) {
    throw new Error("정보를 불러오는 데 실패했습니다.");
  }

  setLoading(false);
}

// 디테일 댓글
export async function getComments(
  productId: string | string[],
  setCommentsData: React.Dispatch<
    React.SetStateAction<CommentDataProps | undefined>
  >
) {
  const response = await fetch(
    `${BASE_URL}/products/${productId}/comments?limit=10`
  );
  try {
    const body = await response.json();
    setCommentsData(body);
  } catch (error) {
    console.log(error);
  }

  if (!response.ok) {
    throw new Error("정보를 불러오는 데 실패했습니다.");
  }
}
