import React from "react";
import Link from "next/link";
import heartIcon from "../assets/icon/ic_heart.png";
import defaultImage from "../assets/icon/ic_default.png";
import styles from "../../styles/itemCard.module.css";
import Image from "next/image";

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
      <Link href={`/items/${item.id}`}>
        <Image
          className={`${styles.itemImg} ${imgSizeClass}`}
          src={imageUrl}
          alt={item.name}
          width={282}
          height={282}
        />
      </Link>
      <p className={styles.itemName}>{item.name}</p>
      <h3 className={styles.itemPrice}>{item.price.toLocaleString()}원</h3>
      <div className={styles.favorite}>
        <Image className={styles.heartIcon} src={heartIcon} alt="하트" />
        <span className={styles.itemFavoriteCount}>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ItemCard;
