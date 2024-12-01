import React, { useState } from "react";
import searchIcon from "../../assets/img/logo/searchIcon.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom"; // Link import

function NavBar({ orderBy, setOrderBy }) {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 열림 상태 관리

  // 드롭다운 메뉴의 열림/닫힘 상태를 토글하는 함수
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // 드롭다운에서 옵션을 선택했을 때 정렬 기준을 변경하고 드롭다운을 닫는 함수
  const selectOption = (option) => {
    setOrderBy(option); // 정렬 기준을 선택한 값으로 업데이트
    setIsOpen(false);
  };

  return (
    <div className={styles["all-Container-bar"]}>
      {/* 제목 표시 */}
      <h2 className={styles["title"]}>전체 상품</h2>
      <div className={styles["all-Container-bar-more"]}>
        {/* 검색 아이콘 */}
        <img
          src={searchIcon}
          className={styles["search-icon"]}
          alt="search-icon"
        />
        {/* 검색 input */}
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="검색할 상품을 입력해주세요"
        ></input>
        {/* 상품 등록 버튼 */}
        <Link to="/additem">
          <button className={styles["register-button"]}>상품 등록하기</button>
        </Link>
        {/* 드롭다운 버튼 */}
        <button className={styles["dropdown-btn"]} onClick={toggleDropdown}>
          {orderBy}{" "}
          <span className={styles["arrow"]}>{isOpen ? "▲" : "▼"}</span>
        </button>
        {/* 드롭다운 목록 */}
        {isOpen && (
          <ul className={styles["dropdown-list"]}>
            <li
              className={styles["dropdown-item"]}
              onClick={() => selectOption("최신순")}
              id={styles["dropdown-item-new"]}
            >
              최신순
            </li>
            <li
              className={styles["dropdown-item"]}
              onClick={() => selectOption("좋아요순")}
              id={styles["dropdown-item-favorite"]}
            >
              좋아요순
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
