"use client";

import { Article } from "@/types/article";
import ArticleForm from "./ArticleForm";
import useArticleActions from "./useArticleActions";

export default function ArticleModifyForm({
  initialData,
}: {
  initialData: Article;
}) {
  const { handleArticleModify } = useArticleActions(initialData.id);

  return (
    <ArticleForm
      mode="edit"
      onFormSubmit={handleArticleModify}
      initialData={initialData}
    />
  );
}
