"use client";

import { Product } from "@/types/product";
import ProductForm from "./ProductForm";
import { useProductModify } from "@/service/product.queries";

export default function ProductModifyForm({
  initialData,
}: {
  initialData: Product;
}) {
  const { mutateAsync: handleProductModify } = useProductModify(initialData.id);

  return (
    <ProductForm
      mode="edit"
      onFormSubmit={handleProductModify}
      initialData={initialData}
    />
  );
}
