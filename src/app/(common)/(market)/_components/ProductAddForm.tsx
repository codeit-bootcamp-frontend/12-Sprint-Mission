"use client";

import ProductForm from "./ProductForm";
import { useProductAdd } from "@/service/product.queries";

export default function ProductAddForm() {
  const { mutateAsync: handleProductAdd } = useProductAdd();

  return <ProductForm mode="add" onFormSubmit={handleProductAdd} />;
}
