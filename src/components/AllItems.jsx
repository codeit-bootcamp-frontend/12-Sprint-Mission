import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItems } from "../api/itemApi";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import "../styles/AllItems.css";

const AllItems = () => {
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const navigate = useNavigate();

  useEffect(() => {
    const updateItemsPerPage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setItemsPerPage(4);
      } else if (screenWidth <= 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await getItems();
        setAllItems(response.list || []);
        setTotalItems(response.totalCount);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchAllItems();
  }, []);

  useEffect(() => {
    let items = [...allItems];

    if (searchQuery) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "latest") {
      items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOption === "favorite") {
      items.sort((a, b) => b.favoriteCount - a.favoriteCount);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredItems(items.slice(startIndex, endIndex));
  }, [allItems, currentPage, itemsPerPage, searchQuery, sortOption]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="all-items">
      <div className="header-row">
        <h2>전체 상품</h2>
        <div className="header-controls">
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="register-button"
            onClick={() => navigate("/addItem")}
          >
            상품 등록하기
          </button>
          <select
            className="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="all-item-list">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            imageUrl={item.images[0] || "https://via.placeholder.com/150"}
            name={item.name}
            price={item.price}
            className="item-card"
          />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default AllItems;
