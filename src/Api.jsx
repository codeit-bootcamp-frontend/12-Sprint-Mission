export async function getProduct() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/users/me/products?page=1&pageSize=10"
  );
  const data = await response.json();
  return data;
}
