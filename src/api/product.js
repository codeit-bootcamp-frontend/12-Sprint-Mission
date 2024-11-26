const BASE_URL = "https://panda-market-api.vercel.app/products";

export const fetchProducts = async (orderBy, pageSize) => {
  const query = `orderBy=${orderBy}`;
  try {
    const response = await fetch(`${BASE_URL}/?${query}&pageSize=${pageSize}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("상품 데이터를 불러오는 중 오류가 발생했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
