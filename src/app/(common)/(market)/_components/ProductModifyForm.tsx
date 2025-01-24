"use client";

import { Product } from "@/types/product";
import ProductForm from "./ProductForm";
import useProductActions from "./useProductActions";

export default function ProductModifyForm({
  initialData,
}: {
  initialData: Product;
}) {
  const { handleProductModify } = useProductActions(initialData.id);

  return (
    <ProductForm
      mode="edit"
      onFormSubmit={handleProductModify}
      initialData={initialData}
    />
  );
}
