import React from "react";
import "./PaginationBar.css";
import LeftArrorw from "../../assets/icons/arrow-left.svg";
import RightArrow from "../../assets/icons/arrow-right.svg";

const MAX_VISIBLE_PAGES = 5; // 한 번에 보여줄 페이지의 최대 개수

interface PaginationBarProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalPageNum,
  activePageNum,
  onPageChange,
}) => {
  let startPage: number;

  if (totalPageNum <= MAX_VISIBLE_PAGES) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(MAX_VISIBLE_PAGES / 2), 1);
    startPage = Math.min(startPage, totalPageNum - MAX_VISIBLE_PAGES + 1);
  }

  const pages = Array.from(
    { length: Math.min(MAX_VISIBLE_PAGES, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <img src={LeftArrorw} alt="왼쪽 화살표" />
      </button>
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
      <button
        className="paginationButton"
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <img src={RightArrow} alt="오른쪽 화살표" />
      </button>
    </div>
  );
};

export default PaginationBar;
