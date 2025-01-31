import React from "react";
import styles from "./Pagination.module.css";

function PageNation({ currentPage, totalPages, onPageChange }) {
  // 5개씩 묶은 페이지 버튼 생성
  const getPageButtons = () => {
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <div className={styles.pagination}>
      {/* << 버튼: 5페이지 뒤로 */}
      {currentPage > 5 && (
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 5))}
          className={styles.page_btn}
        >
          {"<<"}
        </button>
      )}
      {/* < 버튼: 1페이지 뒤로 */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.page_btn}
        >
          {"<"}
        </button>
      )}
      {/* 페이지 번호 버튼 */}
      {getPageButtons().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.page_btn} ${
            currentPage === page ? styles.active : ""
          }`}
        >
          {page}
        </button>
      ))}
      {/* > 버튼: 1페이지 앞으로 */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={styles.page_btn}
        >
          {">"}
        </button>
      )}
      {/* >> 버튼: 5페이지 앞으로 */}
      {currentPage + 5 <= totalPages && (
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 5))}
          className={styles.page_btn}
        >
          {">>"}
        </button>
      )}
    </div>
  );
}

export default PageNation;
