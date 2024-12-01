import React, { useEffect, useState } from "react";
import { getItems } from "../api/itemApi";
import ItemCard from "./ItemCard";
import "../styles/bestItems.css";

const BestItems = () => {
  const [bestItems, setBestItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchBestItems = async () => {
      try {
        const response = await getItems();
        const productList = response.list || [];
        const sortedItems = productList.sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );
        setBestItems(sortedItems);
      } catch (error) {
        console.error("Failed to fetch best items:", error);
      }
    };

    fetchBestItems();
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setItemsPerPage(1); // 모바일: 1개
      } else if (screenWidth <= 1024) {
        setItemsPerPage(2); // 태블릿: 2개
      } else {
        setItemsPerPage(4); // 데스크탑: 4개
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    setVisibleItems(bestItems.slice(0, itemsPerPage));
  }, [bestItems, itemsPerPage]);

  return (
    <div className="best-items">
      <h2>베스트 상품</h2>
      <div className="best-item-list">
        {visibleItems.map((item) => (
          <ItemCard
            key={item.id}
            imageUrl={item.images[0]}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestItems;
