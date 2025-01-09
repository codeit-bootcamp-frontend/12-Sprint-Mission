import { PageWrapper } from "@/components/Page";
import { getProduct } from "@/service/product";
import { BackToList } from "@/components/Button";
import { getComments } from "@/service/comments";
import ProductDetail from "../../_components/ProductDetail";
import Comments from "../../_components/Comments";

export const dynamic = "force-dynamic";

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
      <Comments name="products" data={comments} />
      <BackToList />
    </PageWrapper>
  );
}
