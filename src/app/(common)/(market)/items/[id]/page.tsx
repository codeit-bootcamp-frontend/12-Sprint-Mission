import { PageWrapper } from "@/components/Page";
import { getProduct } from "@/service/product";
import ProductDetail from "../_components/ProductDetail";
export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const detail = await getProduct(Number(id));

  return (
    <PageWrapper>
      <ProductDetail detail={detail} />

      {/* comment 작성 */}
      {/* <CommentAdd name="products" /> */}

      {/* non critical */}
      {/* <Suspense fallback={<Loading>상품 문의를 가져오는 중입니다....</Loading>}>
        <Await resolve={comments}>
          {(comments: CommentListType) => (
            <CommentList name="products" comments={comments} />
          )}
        </Await>
      </Suspense>

      <BackToList /> */}
    </PageWrapper>
  );
}
