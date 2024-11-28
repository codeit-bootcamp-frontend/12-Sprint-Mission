import React from "react";
import "./Product.css";
import heartImg from "../../img/heartIcon.png";

export default function Products({ item, layoutType }) {
  return (
    <div className="product">
      <img
        src={item.images}
        alt="제품 이미지"
        className={`product-img ${layoutType}`}
      />
      <h2 className="product-name">{item.name}</h2>
      <p className="product-price">{item.price}</p>
      <div className="favorite-count__container">
        <img src={heartImg} alt="하트이미지" className="favorite-count__img" />
        <p className="product-favoriteCount">{item.favoriteCount}</p>
      </div>
    </div>
  );
}
