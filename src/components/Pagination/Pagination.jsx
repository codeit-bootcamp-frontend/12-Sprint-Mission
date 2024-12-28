import clsx from "clsx";
import arrowLeft from "@assets/img/icon/icon_arrow_left.svg";
import arrowRight from "@assets/img/icon/icon_arrow_right.svg";
import doubleArrowLeft from "@assets/img/icon/icon_double_arrow_left.svg";
import doubleArrowRight from "@assets/img/icon/icon_double_arrow_right.svg";
import styles from "./Pagination.module.scss";

export function Pagination({
  page,
  pageNumbers,
  isPrevDisabled,
  isNextDisabled,
  isPrevGroupDisabled,
  isNextGroupDisabled,
  onPrevClick,
  onNextClick,
  onPageClick,
  onPrevGroupClick,
  onNextGroupClick,
}) {
  if (!pageNumbers.length) return null;

  return (
    <ul className={styles.list}>
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={!isPrevGroupDisabled ? onPrevGroupClick : undefined}
          disabled={isPrevGroupDisabled}
        >
          <img src={doubleArrowLeft} alt="이전 그룹" />
        </button>
      </li>
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={!isPrevDisabled ? onPrevClick : undefined}
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
            onClick={onPageClick}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={!isNextDisabled ? onNextClick : undefined}
          disabled={isNextDisabled}
        >
          <img src={arrowRight} alt="다음 페이지" />
        </button>
      </li>
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={!isNextGroupDisabled ? onNextGroupClick : undefined}
          disabled={isNextGroupDisabled}
        >
          <img src={doubleArrowRight} alt="다음 그룹" />
        </button>
      </li>
    </ul>
  );
}
