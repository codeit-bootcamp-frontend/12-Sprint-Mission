export async function getData({ order = 'recent', page = 1 }) {
  const query = `?page=${page}&pageSize=10&orderBy=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  const body = await response.json();
  return body;
}
