import { PageWrapper } from "@/components/Page";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import axios from "axios";
import { getArticle } from "@/service/article";
import ArticleForm from "../../_components/ArticleForm";

export default async function ModifyBoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const id = (await params).id;

  try {
    const detail = await getArticle(Number(id));
    const isOwner = detail.writer.id === Number(session?.user.id);

    if (!isOwner) {
      redirect("/items");
    }

    // 상세데이터에 이미지가 null로 오는경우 기본값을 undefined으로 변경시켜서 주입
    const filteredDetail = { ...detail, image: detail.image ?? undefined };

    return (
      <PageWrapper>
        <Suspense
          fallback={<Message>게시물정보를 가져오는 중입니다...</Message>}
        >
          <ArticleForm
            mode="edit"
            initialData={filteredDetail}
            articleId={Number(id)}
          />
        </Suspense>
      </PageWrapper>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }

      throw new Error("게시물 정보를 가져오는데 실패했습니다");
    }

    throw new Error("알 수 없는 에러가 발생했습니다.");
  }
}
