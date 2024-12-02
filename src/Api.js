export async function getProduct(page = 1, pageSize = 10, orderBy = "recent") {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const data = await response.json();
  return data;
}
