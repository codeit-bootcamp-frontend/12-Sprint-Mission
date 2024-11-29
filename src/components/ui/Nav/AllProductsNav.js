import { useState } from "react";
import { Link } from "react-router-dom";
import "./AllProductsNav.css";
import dropdownToggle from "../../../../src/assets/icons/dropdown-toggle.svg";

function AllProductsNav({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (option, sortKey) => {
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
        <div className="dropdown-container">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            {selected}
            <img src={dropdownToggle} alt="더보기" />
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={() => selectOption("최신순", "recent")}>
                최신순
              </li>
              <li className="dropdown-item" onClick={() => selectOption("인기순", "favorite")}>
                인기순
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AllProductsNav;
