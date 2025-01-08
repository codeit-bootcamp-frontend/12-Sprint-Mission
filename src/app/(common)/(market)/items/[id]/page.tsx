import { PageWrapper } from "@/components/Page";
import { getProduct } from "@/service/product";
import ProductDetail from "../../_components/ProductDetail";
import { CommentAdd, CommentList } from "@/components/Comment";
import { BackToList } from "@/components/Button";
import { getComments } from "@/service/comments";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const [detail, comments] = await Promise.all([
    getProduct(Number(id)),
    getComments("products", { productId: Number(id), limit: 5 }),
  ]);

  return (
    <PageWrapper>
      <ProductDetail detail={detail} />

      {/* comment 작성 */}
      <CommentAdd name="products" />

      <CommentList name="products" comments={comments} />

      <BackToList />
    </PageWrapper>
  );
}
