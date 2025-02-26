"use client";

import { Article } from "@/types/article";
import ArticleForm from "./ArticleForm";
import { useArticleModify } from "@/service/article.queries";

export default function ArticleModifyForm({
  initialData,
}: {
  initialData: Article;
}) {
  const { mutateAsync: handleArticleModify } = useArticleModify(initialData.id);

  return (
    <ArticleForm
      mode="edit"
      onFormSubmit={handleArticleModify}
      initialData={initialData}
    />
  );
}
