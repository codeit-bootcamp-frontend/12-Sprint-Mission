import React from "react";
import { Link } from "react-router-dom";
import heartIcon from "../asset/icon/ic_heart.png";
import defaultImage from "../asset/none.jpeg";

function ItemCard({ item, imgSizeClass }) {
  const imageUrl =
    item.images && item.images.length > 0 ? item.images[0] : defaultImage;

  return (
    <div className="itemCard">
      <Link to={`/items/${item.id}`}>
        <img
          className={`itemImg ${imgSizeClass}`}
          src={imageUrl}
          alt={item.name}
        />
      </Link>
      <p className="itemName">{item.name}</p>
      <h3 className="itemPrice">{item.price.toLocaleString()}원</h3>
      <div className="favorit">
        <img className="heartIcon" src={heartIcon} alt="하트" />
        <span className="itemFavoritCount">{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ItemCard;
