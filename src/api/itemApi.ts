// 상품 리스트 조회 함수
export async function getProducts(
  params: Record<string, string | number> = {}
): Promise<Product[]> {
  const query = new URLSearchParams(
    Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    )
  ).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body: Product[] = await response.json(); // 응답 타입 지정
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

// 상품 상세 정보 조회 함수
export async function getProductDetail(productId: number): Promise<Product> {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body: Product = await response.json(); // 응답 타입 지정
    return body;
  } catch (error) {
    console.error("Failed to fetch product detail:", error);
    throw error;
  }
}

// 상품 댓글 조회 함수
export async function getProductComments({
  productId,
  params,
}: {
  productId: string;
  params: {
    limit: number;
    page?: number;
  };
}): Promise<Comment[]> {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const query = new URLSearchParams(
      Object.fromEntries(
        Object.entries(params).map(([key, value]) => [key, String(value)])
      )
    ).toString();

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const body: Comment[] = await response.json();
    return body; // 배열 그대로 반환
  } catch (error) {
    console.error("Failed to fetch product comments:", error);
    throw error;
  }
}

// 타입 정의
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  // 기타 필요한 필드 추가
}

interface Comment {
  id: number;
  productId: number;
  content: string;
  author: string;
  createdAt: string;
  // 기타 필요한 필드 추가
}
