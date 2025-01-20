import React, { useState, useEffect } from "react";
import styles from "./allProduct.module.css";

// props에 대한 타입 정의
interface PaginationProps {
  currentPage: number; // 현재 페이지 번호
  totalItems: number; // 전체 아이템 개수
  itemsPerPage: number; // 페이지당 아이템 개수
  onPageChange: (page: number) => void; // 페이지 변경 시 호출되는 함수
}

const pageRange = 5; // 한 번에 보여줄 페이지 버튼 개수

function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수 계산

  // 페이지 범위 계산
  const [startPage, setStartPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(
    Math.min(totalPages, pageRange)
  );

  // 페이지 목록 생성
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  // 페이지 번호 클릭 시 처리
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  // 이전 버튼 클릭 시
  const handlePrevClick = () => {
    if (startPage > 1) {
      const newStartPage = Math.max(1, startPage - pageRange);
      setStartPage(newStartPage);
      setEndPage(newStartPage + pageRange - 1);
      onPageChange(newStartPage); // 페이지 변경
    }
  };

  // 다음 버튼 클릭 시
  const handleNextClick = () => {
    if (endPage < totalPages) {
      const newStartPage = Math.min(
        totalPages - pageRange + 1,
        startPage + pageRange
      );
      setStartPage(newStartPage);
      setEndPage(newStartPage + pageRange - 1);
      onPageChange(newStartPage); // 페이지 변경
    }
  };

  // 페이지 범위가 변경될 때마다 효과 처리
  useEffect(() => {
    // 첫 렌더링 시에도 범위가 보이도록 함
    if (currentPage < startPage || currentPage > endPage) {
      onPageChange(startPage); // 범위에 맞게 페이지 업데이트
    }
  }, [currentPage, startPage, endPage, onPageChange]);

  // 페이지 범위가 업데이트되면, 페이지 번호가 보이도록 설정
  useEffect(() => {
    setEndPage(Math.min(totalPages, startPage + pageRange - 1));
  }, [totalPages, startPage]);

  return (
    <div className={styles.pagination}>
      {/* 이전 버튼 */}
      <button
        className={styles.page_btn}
        onClick={handlePrevClick}
        disabled={startPage === 1} // 첫 페이지일 경우 비활성화
      >
        &lt;
      </button>

      {/* 페이지 번호 버튼 */}
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.page_btn} ${
            page === currentPage ? styles.active : "" // 현재 페이지는 활성화 스타일 적용
          }`}
          onClick={() => handlePageClick(page)} // 페이지 클릭 시 페이지 변경
        >
          {page}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        className={styles.page_btn}
        onClick={handleNextClick}
        disabled={endPage === totalPages} // 마지막 페이지일 경우 비활성화
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
