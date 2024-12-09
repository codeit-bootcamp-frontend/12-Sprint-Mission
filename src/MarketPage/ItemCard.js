import React from "react";
import { Link } from "react-router-dom";
import LikeCount from "../assets/like.svg";

function ItemCard({ item }) {
  return (
    <Link to={`/items/${item.id}`} className="itemCard">
      <img
        src={item.images?.[0]}
        alt={item.name}
        className="itemCardThumbnail"
      />
      <div className="itemCategory">
        <h2 className="itemName">{item.name}</h2>
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div class="likeCount">
          <img src={LikeCount} alt="좋아요" />
          {item.LikeCount}
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
