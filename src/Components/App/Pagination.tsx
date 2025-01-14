import { calculatePagination } from "../../utils/calculatorPagination";
import styles from "../../styles/app/pagination.module.css";
import arrowPrevImg from "../../assets/images/app/pagination/arrow_left.svg";
import arrowNextImg from "../../assets/images/app/pagination/arrow_right.svg";
import { ArrowButton, Pagination } from "./types";

function PaginationContainer({
  page,
  setPage,
  pageCount,
  isDataCount,
}: Pagination) {
  const itemCountPerPage = Math.ceil(pageCount / isDataCount); // 페이지 당 보여줄 데이터 개수
  const ITEMS_PER_PAGINATION = 5; // 한 페이지당 pagination 5개 출력

  const { totalPages, currentSet, startPage, endPage } = calculatePagination({
    page,
    pageCount,
    isDataCount,
    ITEMS_PER_PAGINATION,
  });

  const noPrev = page === 1;
  const noNext = page + itemCountPerPage - 1 >= totalPages;

  function generatePageNumbers({ startPage, endPage }: ArrowButton) {
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  return (
    <ul className={styles.pagination}>
      {currentSet > 1 && (
        <li
          className={`${styles.move} ${noPrev && styles.invisible}`}
          onClick={() => setPage(1)}
        >
          <img src={arrowPrevImg} alt="<" />
        </li>
      )}
      {generatePageNumbers({startPage, endPage}).map((pageNumber) => (
        <li
          key={pageNumber}
          className={`${styles.page} ${page === pageNumber && styles.active}`}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
      {currentSet < Math.ceil(totalPages / ITEMS_PER_PAGINATION) && (
        <li
          className={`${styles.move} ${noNext && styles.invisible}`}
          onClick={() => setPage(endPage + 1)}
        >
          <img src={arrowNextImg} alt=">" />
        </li>
      )}
    </ul>
  );
}

export default PaginationContainer;
