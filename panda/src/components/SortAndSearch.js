// src/components/SortAndSearch.js
import React, { useState } from 'react';

function SortAndSearch({ onSortChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-search">
      <input
        type="text"
        placeholder="검색"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSort}>
        <option value="newest">최신순</option>
        <option value="likes">좋아요순</option>
      </select>
    </div>
  );
}

export default SortAndSearch;
