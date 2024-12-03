import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { getProduct } from "@service/product";
import { getProductComments } from "@service/comments";
import { PageWrapper } from "@components/Page";
import ProductDetail from "./components/ProductDetail";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { BackToList } from "@components/Button/BackToList";
import { Loading } from "@components/ui/Loading";

export default function ItemDetailPage() {
  const { detail, comments } = useLoaderData();

  return (
    <PageWrapper>
      {/* critical */}
      <ProductDetail detail={detail} />

      {/* comment 작성 */}
      <CommentForm />

      {/* non critical */}
      <Suspense fallback={<Loading>상품 문의를 가져오는 중입니다....</Loading>}>
        <Await resolve={comments}>
          {(comments) => <CommentList comments={comments} />}
        </Await>
      </Suspense>

      <BackToList />
    </PageWrapper>
  );
}

async function loader({ params }) {
  const { id } = params;

  // 1) Promise.all로 병렬로 받는게 좋을까?
  // const [detail, comments] = await Promise.all([
  //   getProduct(id),
  //   getComments({ productId: id, limit: 5 })
  // ]);

  // 2) detail을 먼저받고, comments는 promise상태로 전달해버릴까?
  const detail = await getProduct(id);
  const comments = getProductComments({ productId: id, limit: 5 });

  return { detail, comments };
}

ItemDetailPage.loader = loader;
