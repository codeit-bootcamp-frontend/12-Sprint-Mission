export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const baseURL = "https://panda-market-api.vercel.app";

  const response = await fetch(
    `${baseURL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );

  if (!response.ok) {
    throw new Error("상품 정보를 가져오는데 실패했습니다.");
  }
  const body = await response.json();
  return body.list;
}
