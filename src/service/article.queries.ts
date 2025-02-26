import { ListMode } from "@/types/article";
import { ListQueryParams } from "@/types/common";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addArticle,
  deleteArticle,
  getArticle,
  getArticles,
  modifyArticle,
  toggleLike,
  uploadArticleImage,
} from "./article";
import { ArticleFormType } from "@/schemas/article";

export function useGetArticles(
  mode: ListMode,
  params: Partial<ListQueryParams>
) {
  return useQuery({
    queryKey: ["articles", mode, params],
    queryFn: () =>
      getArticles({
        ...params,
        orderBy: mode === "best" ? "like" : "recent",
      }),
  });
}

export function useGetArticle(articeId: number) {
  return useQuery({
    queryKey: ["article", articeId],
    queryFn: () => getArticle(articeId),
  });
}

export function useArticleAdd() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: ArticleFormType) => {
      if (formData.image instanceof File) {
        const { url } = await uploadArticleImage(formData.image);
        formData.image = url;
      }
      return addArticle(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export function useArticleModify(articeId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: ArticleFormType) => {
      if (formData.image instanceof File) {
        const { url } = await uploadArticleImage(formData.image);
        formData.image = url;
      }
      return modifyArticle(articeId, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", articeId] });
    },
  });
}

export function useArticleToggleLike(articeId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (flag: boolean) => toggleLike(articeId, flag),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", articeId] });
    },
  });
}

export function useArticleDelete(articeId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteArticle(articeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
