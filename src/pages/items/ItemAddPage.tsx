import { PageWrapper } from "@components/Page";
import useProductActions from "./components/useProductActions";
import ProductForm from "./components/ProductForm";

export default function ItemAddPage() {
  const { handleProductAdd } = useProductActions();

  return (
    <PageWrapper>
      <ProductForm mode="add" onFormSubmit={handleProductAdd} />
    </PageWrapper>
  );
}
