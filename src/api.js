export async function getData({ page = 1, pageSize = 4, orderBy = "recent" }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = response.json();
  return body;
}
//fetch axois 함 마 둘다 써봐라 