export async function getProduct({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await response.json();
  return data;
}
