import React from "react";
import "../css/Product.css";

export default function Products({ item }) {
  return (
    <div className="product">
      <img src={item.images} alt="" className="product-img" />
      <h2 className="product-name">{item.name}</h2>
      <p className="product-price">{item.price}</p>
      <p className="product-favoriteCount">{item.favoriteCount}</p>
    </div>
  );
}
