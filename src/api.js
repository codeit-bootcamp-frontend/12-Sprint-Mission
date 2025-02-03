const BASE_URL = "https://panda-market-api.vercel.app";

export async function getData({ page = 1, pageSize = 4, orderBy = "recent" }) {
  const url = new URL("/products", BASE_URL);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("orderBy", orderBy);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}

//GET product ID
export async function getProductDetail(id) {
  const url = new URL(`/products/${id}`, BASE_URL);
  // url.searchParams.append("{id}", id);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}

//GET 상세페이지 댓글들

export async function getProductComment(id, limit = 3) {
  const url = new URL(`/products/${id}/comments`, BASE_URL);
  url.searchParams.append("limit", limit);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}
