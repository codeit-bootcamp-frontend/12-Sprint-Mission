import React from "react";
import "./Product.css";

export default function Products({ item }) {
  return (
    <div className="product">
      <img src={item.images} alt="제품 이미지" className="product-img" />
      <h2 className="product-name">{item.name}</h2>
      <p className="product-price">{item.price}</p>
      <p className="product-favoriteCount">{item.favoriteCount}</p>
    </div>
  );
}
