import { PageWrapper } from "@/components/Page";
import { CommentAdd, CommentList } from "@/components/Comment";
import ProductDetail from "../../_components/ProductDetail";

export default function ItemDetailPage() {
  return (
    <PageWrapper>
      <ProductDetail />
      <CommentAdd name="products" />
      <CommentList name="products" />
    </PageWrapper>
  );
}
