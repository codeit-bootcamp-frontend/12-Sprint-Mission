// ItemCard.jsx
import React from "react";
import "../styles/ItemCard.css";
// props를 통해 데이터를 받아서 렌더링합니다.
const ItemCard = ({ imageUrl, name, price }) => {
  return (
    <div className="item-card">
      <img src={imageUrl} alt={name} className="item-image" />
      <p className="item-name">{name}</p>
      <p className="item-price">{price}원</p>
    </div>
  );
};

export default ItemCard;
