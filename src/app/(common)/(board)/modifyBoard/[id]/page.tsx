"use client";

import { PageWrapper } from "@/components/Page";
import { notFound, redirect, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useArticleModify, useGetArticle } from "@/service/article.queries";
import { Loading } from "@/components/ui/Loading";
import ArticleForm from "../../_components/ArticleForm";

export default function ModifyBoardPage() {
  const { data: session } = useSession();
  const { id } = useParams<{ id: string }>();
  const articleId = Number(id);

  const { data: detail, isPending } = useGetArticle(articleId);
  const { mutateAsync: handleArticleModify } = useArticleModify(articleId);

  if (isPending) {
    return <Loading>게시물 정보를 가져오는 중입니다.</Loading>;
  }

  if (!detail) {
    notFound();
  }

  const isOwner = detail.writer.id === Number(session?.user.id);
  if (!isOwner) {
    redirect("/boards");
  }

  const filteredDetail = { ...detail, image: detail.image ?? undefined };

  return (
    <PageWrapper>
      <ArticleForm
        mode="edit"
        onFormSubmit={handleArticleModify}
        initialData={filteredDetail}
      />
    </PageWrapper>
  );
}
