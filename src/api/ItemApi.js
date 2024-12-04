export async function getProduct({ page = 1, pageSize = 10, orderBy = "resent" }) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;

  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
      throw new Error(`error : ${response.status}`);
    }
    const body = response.json();
    return body;
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.", error);
    throw error;
  }
}
