import React from "react";
import ItemCard from "./ItemCard";
import styles from "./pandaBestList.module.css";

interface Item {
  id: string;
  name: string;
  price: number;
  images: string[];
  favoriteCount: number;
}

interface PandaBestListProps {
  items: Item[];
}

function PandaBestList({ items }: PandaBestListProps) {
  const sortedItems = items
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  return (
    <div className={styles.bestListContainer}>
      <h2 className={styles.title}>베스트 상품</h2>
      <div className={styles.bestList}>
        {sortedItems.map((item) => (
          <ItemCard key={item.id} item={item} imgSizeClass={styles.bestImg} />
        ))}
      </div>
    </div>
  );
}

export default PandaBestList;
