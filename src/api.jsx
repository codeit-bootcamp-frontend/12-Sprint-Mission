export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy,
  keyword = "",
  totalItems,
}) {
  const params = new URLSearchParams({
    page,
    pageSize,
    // keyword가 비어있지 않은 경우에만 추가
    ...(keyword && { keyword }),
  });

  // orderBy가 있을 때만 추가
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

// Fetch product details
export async function getProductDetails(productId) {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}`
    );
    if (!response.ok) {
      throw new Error("Product not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}

// Fetch product comments
export async function getProductComments(productId, limit = 10) {
  const params = new URLSearchParams({ limit: limit.toString() }); // limit 값 추가
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?${params}`
    );
    if (!response.ok) {
      throw new Error("Comments not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product comments:", error);
    throw error;
  }
}
