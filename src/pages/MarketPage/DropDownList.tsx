import React, { useState } from "react";
import "./DropDownList.css";
import { ProductSortOption } from "../../types/productTypes";

interface DropdownListProps {
  onSortSelection: (sortOption: ProductSortOption) => void;
}

const DropdownList: React.FC<DropdownListProps> = ({ onSortSelection }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (
    sortOption: ProductSortOption,
    event: React.MouseEvent
  ) => {
    event?.stopPropagation();
    onSortSelection(sortOption);
    setIsDropdownVisible(false); // 항목 클릭 시 드롭다운 닫기
  };

  return (
    <div className="dropdownList" onClick={toggleDropdown}>
      <div
        className="dropdownItem"
        onClick={(event) => handleOptionClick("recent", event)}
      >
        최신순
      </div>
      <div
        className="dropdownItem"
        onClick={(event) => handleOptionClick("favorite", event)}
      >
        인기순
      </div>
    </div>
  );
};

export default DropdownList;
