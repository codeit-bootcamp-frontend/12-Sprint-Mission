export async function getData(orderBy = 'recent') {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=${orderBy}`
  );
  const body = await response.json();
  return body;
}
