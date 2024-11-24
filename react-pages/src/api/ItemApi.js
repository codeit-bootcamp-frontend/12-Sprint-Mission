export const getItems = async ({
  order = "recent",
  pageSize = 10,
  keyword = "",
  page = 1,
} = {}) => {
  const query = `orderBy=${order}&pageSize=${pageSize}&keyword=${keyword}&page=${page}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await res.json();
  return body.list;
};
