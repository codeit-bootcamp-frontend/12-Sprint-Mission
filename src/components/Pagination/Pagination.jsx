import clsx from "clsx";
import arrowLeft from "@assets/img/icon/icon_arrow_left.svg";
import arrowRight from "@assets/img/icon/icon_arrow_right.svg";
import styles from "./Pagination.module.scss";

export function Pagination({
  page,
  pageNumbers,
  isPrevDisabled,
  isNextDisabled,
  handlePrevClick,
  handleNextClick,
  handlePageClick,
}) {
  if (!pageNumbers.length) return null;

  return (
    <ul className={styles.list}>
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={handlePrevClick}
          disabled={isPrevDisabled}
        >
          <img src={arrowLeft} alt="이전 페이지" />
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            type="button"
            className={clsx(styles.item, page === number && styles.active)}
            data-number={number}
            onClick={handlePageClick}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={handleNextClick}
          disabled={isNextDisabled}
        >
          <img src={arrowRight} alt="다음 페이지" />
        </button>
      </li>
    </ul>
  );
}
