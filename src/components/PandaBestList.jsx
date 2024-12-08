import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getItems } from "../api/itemApi";

function PandaBestList() {
  const [listItems, setItems] = useState([]);

  useEffect(() => {
    getItems({ order: "favorite", pageSize: 10 }).then((data) => {
      const sortedItems = data
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, 4);
      setItems(sortedItems);
    });
  }, []);

  return (
    <div className="bestList-container">
      <h2 className="title">베스트 상품</h2>
      <div className="bestList">
        {listItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PandaBestList;
