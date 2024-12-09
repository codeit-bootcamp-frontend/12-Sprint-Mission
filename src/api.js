const BASE_URL = "https://panda-market-api.vercel.app";
export async function getData({ page = 1, pageSize = 4, orderBy = "recent" }) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  const body = response.json();
  return body;
}
