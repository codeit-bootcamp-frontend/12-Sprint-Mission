"use client";

import ArticleForm from "./ArticleForm";
import useArticleActions from "./useArticleActions";

export default function ArticleAddForm() {
  const { handleArticleAdd } = useArticleActions();

  return <ArticleForm mode="add" onFormSubmit={handleArticleAdd} />;
}
