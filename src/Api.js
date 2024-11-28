export async function productList({ orderBy = "recent", pageSize = 10 }) {
  const query = `page=1&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("제품목록을 가지고 오는데 실패했습니다.");
  }
  const date = await response.json();
  return date;
}

export default productList;
