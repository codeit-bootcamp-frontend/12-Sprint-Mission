import { Product, ProductResponse, Comment } from "@/types";

interface GetProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
  totalItems?: number;
}

interface GetProductCommentsParams {
  productId: string;
  limit?: number;
}

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy,
  keyword = "",
  totalItems,
}: GetProductsParams): Promise<ProductResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...(keyword && { keyword }),
  });

  if (orderBy) {
    params.append("orderBy", orderBy);
  }

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("서버 오류");
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    throw new Error("데이터 오류");
  }
}

export async function getProductDetails(productId: string): Promise<Product> {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}`
    );
    if (!response.ok) {
      throw new Error("상품을 찾을 수 없습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("상품 세부 정보를 가져오는 중 오류 발생:", error);
    throw error;
  }
}

export async function getProductComments({
  productId,
  limit = 10,
}: GetProductCommentsParams): Promise<Comment[]> {
  const params = new URLSearchParams({ limit: limit.toString() });
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?${params}`
    );
    if (!response.ok) {
      throw new Error("댓글을 찾을 수 없습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("상품 댓글을 가져오는 중 오류 발생:", error);
    throw error;
  }
}
