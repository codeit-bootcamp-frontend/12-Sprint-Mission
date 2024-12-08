import { PageWrapper } from "@components/Page";
import ProductForm from "./components/ProductForm";
import useProductActions from "./components/useProductActions";

export default function ItemAddPage() {
  const { handleProductAdd } = useProductActions();

  return (
    <PageWrapper>
      <ProductForm onProductSubmit={handleProductAdd} />
    </PageWrapper>
  );
}
