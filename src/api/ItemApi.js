export async function getProductList({ page = 1, pageSize = 10, orderBy = "recent" }) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;

  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
      throw new Error(`error : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.", error);
    throw error;
  }
}

export async function getProduct({ id = 1 }) {
  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${id}`);
    if (!response.ok) {
      throw new Error(`error : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("상품ID로 데이터를 불러오는데 실패했습니다.", error);
    throw error;
  }
}
