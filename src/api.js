export async function getProduct() {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite`
  );
  const data = await response.json();
  return data;
}
