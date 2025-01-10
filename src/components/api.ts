import Product from "../types/Product";
import { OrderQuery } from "../types/Query";

interface GetProductResponse {
  totalCount: number;
  list: Product[];
}

type ProductQueryParams = {
  order?: OrderQuery;
  pageSize?: number;
  keyword?: string;
  page?: number;
};

const getProduct = async ({ order = "recent", pageSize = 10, keyword = "", page = 1 }: ProductQueryParams): Promise<GetProductResponse> => {
  const query = `orderBy=${order}&pageSize=${pageSize}&keyword=${keyword}&page=${page}`;
  const res = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  const body = await res.json();
  return body;
};

export default getProduct;
