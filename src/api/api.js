export async function getProducts({
  page = 1,
  pageSize = 1,
  orderBy = 'recent',
  keyword = '',
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = response.json();
  return data;
}
