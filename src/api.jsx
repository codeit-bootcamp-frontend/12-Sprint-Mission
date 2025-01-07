export async function getProduct({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
  keyword = "",
}) {
  //기본 URL
  const baseURL = "https://panda-market-api.vercel.app/products";
  //URL 객체
  const url = new URL(baseURL);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  url.searchParams.set("orderBy", orderBy);
  url.searchParams.set("keyword", keyword);
  //API 호출
  console.log(url.toString());
  const response = await fetch(url.toString());
  const data = await response.json();
  return data;
}

//제품 상세페이지
export async function getProductDetail(productSlug) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productSlug}`
  );
  const data = await response.json();
  return data;
}

//제품 코멘트
export async function getProductComment({ productSlug, limit }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productSlug}/comments?limit=${limit}`
  );
  const data = await response.json();
  return data;
}
