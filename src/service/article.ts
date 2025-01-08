import { Article } from "@/types/article";
import { axiosInstance } from "./axios";
import { PaginationResponse } from "@/types/common";

export async function getArticles({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await axiosInstance.get<PaginationResponse<Article>>(
    `/articles?${query}`
  );

  return response.data;
}

export async function getArticle(articleId: number) {
  const response = await axiosInstance.get<Article>(`/articles/${articleId}`);
  console.log(response.headers);
  return response.data;
}
