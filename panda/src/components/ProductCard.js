// src/components/ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "100%" }}
      />
      <h3>{product.name}</h3>
      <p>{product.likes} Likes</p>
    </div>
  );
}

export default ProductCard;
