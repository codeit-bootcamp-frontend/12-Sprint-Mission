import { PageWrapper } from "@/components/Page";
import { BackToList } from "@/components/Button";
import { Suspense } from "react";
import ProdcutDetailAsync from "../../_components/ProdcutDetailAsync";
import CommentsAsync from "../../_components/CommentsAsync";
import { Message } from "@/components/ui";

export default function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <PageWrapper>
      <Suspense
        fallback={<Message>상품상제정보를 가져오는중입니다...</Message>}
      >
        <ProdcutDetailAsync params={params} />
      </Suspense>
      <Suspense fallback={<Message>코멘트를 가져오는중입니다...</Message>}>
        <CommentsAsync name="products" params={params} />
      </Suspense>
      <BackToList />
    </PageWrapper>
  );
}
