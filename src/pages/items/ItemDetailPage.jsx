import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { PageWrapper } from "@components/Page";
import ProductDetail from "./components/ProductDetail";
import { BackToList } from "@components/Button/BackToList";
import { Loading } from "@components/ui/Loading";
import { CommentAdd, CommentList } from "@components/Comment";

export default function ItemDetailPage() {
  const { detail, comments } = useLoaderData();

  return (
    <PageWrapper>
      {/* critical */}
      <ProductDetail detail={detail} />

      {/* comment 작성 */}
      <CommentAdd name="products" />

      {/* non critical */}
      <Suspense fallback={<Loading>상품 문의를 가져오는 중입니다....</Loading>}>
        <Await resolve={comments}>
          {(comments) => <CommentList name="products" comments={comments} />}
        </Await>
      </Suspense>

      <BackToList />
    </PageWrapper>
  );
}
