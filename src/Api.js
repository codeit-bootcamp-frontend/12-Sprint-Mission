export async function getProduct(page, pageSize) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/users/me/products?page=${page}&pageSize=${pageSize}`
  );
  const data = await response.json();
  return data;
}
