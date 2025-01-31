export async function getList({
  orderby = "recent",
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const query = `orderBy=${orderby}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}
