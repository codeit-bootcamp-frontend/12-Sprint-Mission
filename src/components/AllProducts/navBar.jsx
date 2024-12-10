import React, { useState } from "react";
import searchIcon from "../../assets/img/logo/searchIcon.svg";
import styles from "./allProduct.module.css";
import { Link } from "react-router-dom"; // Link import

function NavBar({ orderBy, setOrderBy, keyword, setKeyword }) {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 열림 상태 관리

  // 드롭다운 메뉴의 열림/닫힘 상태를 토글하는 함수
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // 드롭다운에서 옵션을 선택했을 때 정렬 기준을 변경하고 드롭다운을 닫는 함수
  const selectOption = (option) => {
    const order = option === "최신순" ? "recent" : "favorite";
    setOrderBy(order); // 정렬 기준을 선택한 값으로 업데이트
    setIsOpen(false);
  };

  // 검색어 입력 시 부모 컴포넌트로 전달
  const handleSearchChange = (e) => {
    setKeyword(e.target.value); // 검색어 상태 업데이트
  };

  return (
    <div className={styles.all_Container_bar}>
      <h2 className={styles.title}>전체 상품</h2>

      {/* 검색 아이콘 */}
      <img src={searchIcon} className={styles.search_icon} alt="search-icon" />
      {/* 검색 input */}
      <input
        className={styles.search_input}
        type="text"
        value={keyword} // keyword 상태를 input 값으로 사용
        onChange={handleSearchChange} // 검색어가 변경될 때마다 상태 업데이트
        placeholder="검색할 상품을 입력해주세요"
      ></input>
      {/* 상품 등록 버튼 */}
      <Link to="/additem">
        <button className={styles.register_button}>상품 등록하기</button>
      </Link>
      {/* 드롭다운 버튼 */}
      <button className={styles.dropdown_btn} onClick={toggleDropdown}>
        {orderBy === "recent" ? "최신순" : "좋아요순"}{" "}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {/* 드롭다운 목록 */}
      {isOpen && (
        <ul className={styles.dropdown_list}>
          <li
            className={styles.dropdown_item}
            onClick={() => selectOption("최신순")}
            id={styles.dropdown_item_new}
          >
            최신순
          </li>
          <li
            className={styles.dropdown_item}
            onClick={() => selectOption("좋아요순")}
            id={styles.dropdown_item_favorite}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
