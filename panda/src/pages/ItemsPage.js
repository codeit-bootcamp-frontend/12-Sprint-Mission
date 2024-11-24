// src/pages/ItemsPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import Header from "../components/Header";

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    axios
      .get("https://panda-market-api.vercel.app/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("상품 데이터를 불러오는 데 문제가 발생했습니다:", error);
      });
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <select onChange={handleSortChange} value={sortBy}>
          <option value="newest">최신 순</option>
          <option value="likes">좋아요 순</option>
        </select>
        <ItemList products={sortedProducts} />
      </div>
    </div>
  );
}

export default ItemsPage;
