import { PageWrapper } from "@/components/Page";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import { getArticle } from "@/service/article";
import ArticleForm from "../../_components/ArticleForm";
import { AxiosError } from "axios";
import { isRedirectError } from "next/dist/client/components/redirect-error";

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
      redirect("/boards");
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
    if (error instanceof AxiosError) {
      if (error.status === 404) {
        notFound();
      }
    }

    if (isRedirectError(error)) {
      throw error;
    }

    throw new Error("페이지 정보를 가져오는데 문제가 생겼습니다.");
  }
}
