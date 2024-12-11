const BASE_URL = "https://panda-market-api.vercel.app/products";

export async function getItems({
  orderBy = "",
  pageSize = "",
  keyword = "",
  page = 1,
}) {
  const query = `page=${page}&orderBy=${orderBy}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(`${BASE_URL}?${query}`);
  if (!response.ok) {
    throw new Error("아이템을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return {
    list: body.list,
    totalCount: body.totalCount,
  };
}

export async function getItemsDetail(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("아이템을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getItemsComments(id) {
  const response = await fetch(`${BASE_URL}/${id}/comments?limit=100`);
  if (!response.ok) {
    throw new Error("댓글을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
