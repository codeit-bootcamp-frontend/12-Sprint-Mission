import React from "react";
import favoriteIcon from "../assets/Icon.png";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img src={item.images[0]} alt={item.name} className="itemCardImg" />
      <div className="itemCardTextBox">
        <h2 className="itemCardName">{item.name}</h2>
        <p className="itemCardPrice">{item.price.toLocaleString()}원</p>
        <div className="itemCardFavorite">
          <img src={favoriteIcon} className="itemCardFavoriteIcon" />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
