interface Product {
  page?: number;
  pageSize: number;
  orderBy: string;
  keyword?: string;
}

interface Comment {
  productSlug: string;
  limit: number;
}

export async function getProduct({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
  keyword = "",
}: Product) {
  //기본 URL
  const baseURL = "https://panda-market-api.vercel.app/products";
  //URL 객체
  const url = new URL(baseURL);
  url.searchParams.set("page", page.toString());
  url.searchParams.set("pageSize", pageSize.toString());
  url.searchParams.set("orderBy", orderBy);
  url.searchParams.set("keyword", keyword);
  //API 호출
  console.log(url.toString());
  const response = await fetch(url.toString());
  const data = await response.json();
  return data;
}

//제품 상세페이지
export async function getProductDetail(productSlug: string) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productSlug}`
  );
  const data = await response.json();
  return data;
}

//제품 코멘트
export async function getProductComment({ productSlug, limit }: Comment) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productSlug}/comments?limit=${limit}`
  );
  const data = await response.json();
  return data;
}
