import React from "react";
import "./PaginationBar.css";
import { ReactComponent as LeftArrow } from "../../assets/images/icons/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/images/icons/arrow_right.svg";

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5;

  // 시작 페이지 계산
  const startPage = Math.max(
    Math.min(
      activePageNum - Math.floor(maxVisiblePages / 2),
      totalPageNum - maxVisiblePages + 1
    ),
    1
  );

  // 보여줄 페이지 리스트 생성
  const pages = [...Array(Math.min(maxVisiblePages, totalPageNum))].map(
    (_, i) => startPage + i
  );

  return (
    <div className="paginationBar">
      {/* 이전 5개 페이지 버튼 */}
      <button
        className="paginationButton"
        disabled={activePageNum <= 5}
        onClick={() => onPageChange(Math.max(activePageNum - 5, 1))}
      >
        {"<<"}
      </button>
      {/* 이전 페이지 버튼 */}
      <button
        className="paginationButton"
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow />
      </button>

      {/* 페이지 번호 버튼 */}
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${
            activePageNum === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        className="paginationButton"
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </button>

      {/* 다음 5개 페이지 버튼 */}
      <button
        className="paginationButton"
        disabled={activePageNum > totalPageNum - 5}
        onClick={() => onPageChange(Math.min(activePageNum + 5, totalPageNum))}
      >
        {">>"}
      </button>
    </div>
  );
};

export default PaginationBar;
