import React, { useMemo } from "react";
import styles from "./ItemCard.module.css";
import Image from "next/image";

const thumbnailUrl = "https://example.com/..." as const;

interface Item {
  name: string;
  price: number;
  images: string[];
  favoriteCount?: number;
}

interface Props {
  className: string;
  item: Item;
}

export default function ItemCard({ className, item }: Props) {
  const imageSource = useMemo(
    () =>
      item.images.some((image) => image === thumbnailUrl)
        ? "/image/no-image.png"
        : item.images[0] || "/image/no-image.png",
    [item.images]
  );

  return (
    <div className={className}>
      <Image
        src={imageSource}
        width={200}
        height={200}
        alt={item.name}
        className={styles.itemImg}
      />
      <div className="itemSummary">
        <h2 className={styles.itemName}>{item.name}</h2>
        <p className={styles.itemPrice}>{item.price.toLocaleString()}원</p>
        <div className={styles.favorite}>
          <Image src="/image/favorite.svg" width={20} height={20} alt="하트" />
          {item.favoriteCount || 0}
        </div>
      </div>
    </div>
  );
}
