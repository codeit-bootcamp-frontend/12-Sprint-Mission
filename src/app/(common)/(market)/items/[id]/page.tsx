import { PageWrapper } from "@/components/Page";
import { BackToList } from "@/components/Button";
import { Suspense } from "react";
import ProductDetailAsync from "../../_components/ProductDetailAsync";
import CommentsAsync from "../../_components/CommentsAsync";
import { Message } from "@/components/ui";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;

  return (
    <PageWrapper>
      <Suspense
        fallback={<Message>상품상제정보를 가져오는중입니다...</Message>}
      >
        <ProductDetailAsync id={productId} />
      </Suspense>
      <Suspense fallback={<Message>코멘트를 가져오는중입니다...</Message>}>
        <CommentsAsync name="products" id={productId} />
      </Suspense>
      <BackToList />
    </PageWrapper>
  );
}
