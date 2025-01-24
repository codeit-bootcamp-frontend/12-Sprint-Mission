"use client";

import ProductForm from "./ProductForm";
import useProductActions from "./useProductActions";

export default function ProductAddForm() {
  const { handleProductAdd } = useProductActions();

  return <ProductForm mode="add" onFormSubmit={handleProductAdd} />;
}
