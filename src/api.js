export async function getProduct({ pageSize = 4, orderBy = "favorite" }) {
  const query = `page=1&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await response.json();
  return data;
}

//{ pageSize = 4, orderBy = "favorite" }
