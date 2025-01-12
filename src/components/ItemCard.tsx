import React from "react";
import { Link } from "react-router-dom";
import heartIcon from "../asset/icon/ic_heart.png";
import defaultImage from "../asset/none.jpeg";
import styles from "./itemCard.module.css";

interface Item {
  id: string;
  name: string;
  price: number;
  images?: string[];
  favoriteCount: number;
}

interface ItemCardProps {
  item: Item;
  imgSizeClass?: string;
}

function ItemCard({ item, imgSizeClass = "" }: ItemCardProps) {
  const imageUrl =
    item.images && item.images.length > 0 ? item.images[0] : defaultImage;

  return (
    <div className={styles.itemCard}>
      <Link to={`/items/${item.id}`}>
        <img
          className={`${styles.itemImg} ${imgSizeClass}`}
          src={imageUrl}
          alt={item.name}
        />
      </Link>
      <p className={styles.itemName}>{item.name}</p>
      <h3 className={styles.itemPrice}>{item.price.toLocaleString()}원</h3>
      <div className={styles.favorite}>
        <img className={styles.heartIcon} src={heartIcon} alt="하트" />
        <span className={styles.itemFavoriteCount}>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ItemCard;
