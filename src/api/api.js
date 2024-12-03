export async function getItems({
  orderBy = "",
  pageSize = "",
  keyword = "",
  offset = 0,
  limit = 10,
  page = 1,
}) {
  const query = `page=${page}&orderBy=${orderBy}&pageSize=${pageSize}&keyword=${keyword}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return {
    list: body.list,
    totalCount: body.totalCount,
  };
}
