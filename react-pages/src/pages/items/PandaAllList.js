import React, { useState } from "react";
import ItemCard from "./ItemCard";
import "../../Style.css";
import { Link } from "react-router-dom";

function PandaAllList({ items }) {
  const [sortType, setSortType] = useState("newest");

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortType === "favorite") {
      return b.favoriteCount - a.favoriteCount;
    }
    return 0;
  });

  return (
    <div>
      <div className="titleList">
        <h2 className="title">전체 상품</h2>
        <div className="titleOption">
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            className="search-input"
          />
          <Link to="/additem" className="additem-btn">
            상품 등록하기
          </Link>
          <div className="sortDropdown">
            <label htmlFor="sortSelect"></label>
            <select
              id="sortSelect"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="newest">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
      </div>
      <div className="allList">
        {sortedItems.slice(0, 10).map((item) => (
          <ItemCard key={item.id} item={item} imgSizeClass="allImg" />
        ))}
      </div>
    </div>
  );
}

export default PandaAllList;
