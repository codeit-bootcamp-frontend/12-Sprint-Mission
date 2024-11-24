// src/components/ItemList.js
import React from "react";
import ProductCard from "./ProductCard";

function ItemList({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
