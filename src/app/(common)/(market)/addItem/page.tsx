"use client";

import { PageWrapper } from "@/components/Page";
import ProductForm from "../_components/ProductForm";
import { useProductAdd } from "@/service/product.queries";

export default function AddItemPage() {
  const { mutateAsync: handleProductAdd } = useProductAdd();

  return (
    <PageWrapper>
      <ProductForm mode="add" onFormSubmit={handleProductAdd} />;
    </PageWrapper>
  );
}
