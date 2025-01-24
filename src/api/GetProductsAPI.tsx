import { baseURL } from "../constants/VariableSetting";

export async function GetProductsAPI({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const response = await fetch(
    `${baseURL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  );

  if (!response.ok) {
    throw new Error("상품 정보를 가져오는데 실패했습니다.");
  }
  const body = await response.json();
  return body.list;
}
