import { PageWrapper } from "@/components/Page";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import { getArticle } from "@/service/article";
import ArticleForm from "../../_components/ArticleForm";

export default async function ModifyBoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const id = (await params).id;
  const detail = await getArticle(Number(id));
  const isOwner = detail.writer.id === Number(session?.user.id);

  if (!detail) {
    notFound();
  }

  if (!isOwner) {
    redirect("/boards");
  }

  // 상세데이터에 이미지가 null로 오는경우 기본값을 undefined으로 변경시켜서 주입
  const filteredDetail = { ...detail, image: detail.image ?? undefined };

  return (
    <PageWrapper>
      <Suspense fallback={<Message>게시물정보를 가져오는 중입니다...</Message>}>
        <ArticleForm
          mode="edit"
          initialData={filteredDetail}
          articleId={Number(id)}
        />
      </Suspense>
    </PageWrapper>
  );
}
