"use client";

import { PageWrapper } from "@/components/Page";
import ArticleForm from "../_components/ArticleForm";
import { useArticleAdd } from "@/service/article.queries";

export default function AddBoardPage() {
  const { mutateAsync: handleArticleAdd } = useArticleAdd();

  return (
    <PageWrapper>
      <ArticleForm mode="add" onFormSubmit={handleArticleAdd} />
    </PageWrapper>
  );
}
