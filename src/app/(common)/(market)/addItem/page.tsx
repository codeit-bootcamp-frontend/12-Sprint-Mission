import { PageWrapper } from "@/components/Page";
import ProductForm from "../_components/ProductForm";

export default function AddItemPage() {
  return (
    <PageWrapper>
      <ProductForm mode="add" />
    </PageWrapper>
  );
}
