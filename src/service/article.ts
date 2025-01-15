import { Article, DeleteArticleResponse } from "@/types/article";
import { axiosInstance } from "./axios";
import { PaginationResponse } from "@/types/common";
import { ImageUploadResponse } from "@/types/product";
import { ArticleFormType } from "@/schemas/article";

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

export async function uploadArticleImage(file: File) {
  const imgFormData = new FormData();
  imgFormData.append("image", file);

  const response = await axiosInstance.post<ImageUploadResponse>(
    "/images/upload",
    imgFormData
  );

  return response.data;
}

export async function addArticle(productData: ArticleFormType) {
  const response = await axiosInstance.post<Article>("/articles", productData);
  return response.data;
}

export async function modifyArticle(
  articleId: number,
  articleData: ArticleFormType
) {
  const response = await axiosInstance.patch<Article>(
    `/articles/${articleId}`,
    articleData
  );

  return response.data;
}

export async function deleteArticle(articleId: number) {
  const response = await axiosInstance.delete<DeleteArticleResponse>(
    `/articles/${articleId}`
  );

  return response.data;
}

export async function getArticle(articleId: number) {
  const response = await axiosInstance.get<Article>(`/articles/${articleId}`);
  return response.data;
}

export async function toggleLike(articleId: number, flag: boolean) {
  const response = await axiosInstance<Article>({
    method: flag ? "POST" : "DELETE",
    url: `/articles/${articleId}/like`,
  });

  return response.data;
}
