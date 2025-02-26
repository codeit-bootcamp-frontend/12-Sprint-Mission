"use client";

import { PageWrapper } from "@/components/Page";
import { notFound, redirect, useParams } from "next/navigation";
import ArticleModifyForm from "../../_components/ArticleModifyForm";
import { useSession } from "next-auth/react";
import { useGetArticle } from "@/service/article.queries";
import { Loading } from "@/components/ui/Loading";

export default function ModifyBoardPage() {
  const { data: session } = useSession();
  const { id } = useParams<{ id: string }>();
  const articleId = Number(id);

  const { data: detail, isPending } = useGetArticle(articleId);

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
      <ArticleModifyForm initialData={filteredDetail} />
    </PageWrapper>
  );
}
