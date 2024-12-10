import React from "react";
import styles from "./allProduct.module.css";

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수 계산
  const pageRange = 5; // 한 번에 보여줄 페이지 버튼 개수
  const halfRange = Math.floor(pageRange / 2); // 범위의 절반 계산

  // 페이지 범위 계산: 현재 페이지를 기준으로 앞뒤로 최대 2개씩 범위 지정
  const startPage = Math.max(1, currentPage - halfRange);
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  // 시작 페이지 조정
  const adjustedStartPage = Math.max(1, endPage - pageRange + 1);

  // 표시할 페이지 목록 생성
  const pages = Array.from(
    { length: endPage - adjustedStartPage + 1 },
    (_, index) => adjustedStartPage + index
  );

  // 이전 페이지 버튼 클릭 시 페이지 변경
  const handlePrevClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // 다음 페이지 버튼 클릭 시 페이지 변경
  const handleNextClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      {/* 이전 버튼 */}
      <button
        className={styles.page_btn}
        onClick={handlePrevClick}
        disabled={currentPage === 1} // 첫 페이지일 경우 비활성화
      >
        &lt;
      </button>

      {/* 페이지 번호 버튼 */}
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.page_btn} ${
            // 현재 페이지는 활성화 스타일 적용
            page === currentPage ? styles.active : ""
          }`}
          onClick={() => onPageChange(page)} // 페이지 클릭 시 페이지 변경
        >
          {page}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        className={styles.page_btn}
        onClick={handleNextClick}
        disabled={currentPage === totalPages} // 마지막 페이지일 경우 비활성화
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
