// ProductCommentsParams 타입 정의
interface ProductCommentsParams {
  limit: number;
  page?: number; 
  sort?: string; 
  [key: string]: string | number | undefined;
}

// 상품 댓글 목록 조회 API에는 path parameter 'productId'와 함께 페이지당 보여줄 댓글 개수를 나타내는 'limit'을 query parameter로 보내주고 있어요.
export async function getProductComments({
  productId,
  params,
}: {
  productId: number;
  params: ProductCommentsParams;
}): Promise<any> {
  // 상품 ID가 유효한지 확인 후 호출하면 더 안전해요
  if (!productId) {
    throw new Error("유효하지 않은 상품 ID입니다.");
  }

  try {
    // params 객체의 값을 모두 문자열로 변환하여 사용
    const stringifiedParams: Record<string, string> = {};
    for (const key in params) {
      stringifiedParams[key] = String(params[key]);
    }

    // URLSearchParams는 반드시 문자열만 받을 수 있기 때문에 강제로 타입을 변환합니다.
    const query = new URLSearchParams(stringifiedParams).toString();
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품 댓글 정보를 가져오는 데 실패했습니다:", error);
    throw error;
  }
}

export async function getProductDetail(productId: string | number): Promise<any> {
  // productId가 string일 경우, 이를 number로 변환
  const numericProductId = typeof productId === "string" ? parseInt(productId, 10) : productId;

  if (isNaN(numericProductId)) {
    throw new Error("유효하지 않은 상품 ID입니다.");
  }

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${numericProductId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품 상세 정보를 가져오는 데 실패했습니다:", error);
    throw error;
  }
}

// getProducts 함수 export 추가
export async function getProducts(params = {}): Promise<any> {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
