import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./AllProductsNav.css";
import { SortOption } from "../../../types";

interface AllProductsNavProps {
  onSortChange: (newSortOption: SortOption) => void;
}

function AllProductsNav({ onSortChange }: AllProductsNavProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("최신순");

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (option: string, sortKey: SortOption) => {
    setSelected(option);
    setIsOpen(false);
    onSortChange(sortKey);
  };

  return (
    <nav className="item-nav">
      <div className="item-nav-wrapper">
        <h2 className="item-nav-title">전체 상품</h2>
        <Link to="/additem" className="add-product-link">
          상품 등록하기
        </Link>
      </div>

      <div className="item-nav-wrapper">
        <div className="search-container">
          <input type="text" className="item-nav-search" placeholder="검색할 상품을 입력해주세요" />
        </div>
        <Dropdown isOpen={isOpen} selected={selected} onToggle={toggleDropdown} onSelect={selectOption} />
      </div>
    </nav>
  );
}

export default AllProductsNav;
