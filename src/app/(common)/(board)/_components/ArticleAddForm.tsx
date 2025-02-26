"use client";

import ArticleForm from "./ArticleForm";
import { useArticleAdd } from "@/service/article.queries";

export default function ArticleAddForm() {
  const { mutateAsync: handleArticleAdd } = useArticleAdd();

  return <ArticleForm mode="add" onFormSubmit={handleArticleAdd} />;
}
