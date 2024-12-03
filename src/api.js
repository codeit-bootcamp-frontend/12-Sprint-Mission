export async function getProduct({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  //기본 URL
  const baseURL = "https://panda-market-api.vercel.app/products";
  //URL 객체
  const url = new URL(baseURL);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  url.searchParams.set("orderBy", orderBy);
  //API 호출
  console.log(url.toString());
  const response = await fetch(url.toString());
  const data = await response.json();
  return data;
}
