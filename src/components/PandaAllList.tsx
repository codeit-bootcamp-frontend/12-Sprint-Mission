import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard.tsx";
import styles from "./pandaAllList.module.css";

interface Item {
  id: string;
  name: string;
  price: number;
  images: string[];
  favoriteCount: number;
  createdAt: string;
}

interface PandaAllListProps {
  items: Item[];
}

function PandaAllList({ items }: PandaAllListProps) {
  const [sortType, setSortType] = useState("newest");

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    if (sortType === "favorite") {
      return b.favoriteCount - a.favoriteCount;
    }
    return 0;
  });

  return (
    <div>
      <div className={styles.titleList}>
        <h2 className={styles.title}>전체 상품</h2>
        <div className={styles.titleOption}>
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            className={styles.searchInput}
          />
          <Link to="/additem" className={styles.addItemBtn}>
            상품 등록하기
          </Link>
          <div className={styles.sortDropdown}>
            <label htmlFor="sortSelect" className={styles.sortLabel}></label>
            <select
              id="sortSelect"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="newest">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.allList}>
        {sortedItems.slice(0, 10).map((item) => (
          <ItemCard key={item.id} item={item} imgSizeClass={styles.allImg} />
        ))}
      </div>
    </div>
  );
}

export default PandaAllList;
