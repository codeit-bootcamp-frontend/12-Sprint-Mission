import clsx from "clsx";
import arrowLeft from "../../assets/img/icon/icon_arrow_left.svg";
import arrowRight from "../../assets/img/icon/icon_arrow_right.svg";
import styles from "./styles.module.scss";

export default function Pagination({
  totalCount,
  page,
  pageSize,
  onChangePage,
  visibleCount = 5,
}) {
  const totalPage = Math.ceil(totalCount / pageSize);
  const currentGroup = Math.ceil(page / visibleCount);
  const firstPageInGroup = (currentGroup - 1) * visibleCount + 1;
  const lastPageInGroup = Math.min(currentGroup * visibleCount, totalPage);
  const pageLengthInGroup = Math.max(lastPageInGroup - firstPageInGroup + 1, 0);
  const pageNumbers = Array.from(
    { length: pageLengthInGroup },
    (item, index) => firstPageInGroup + index
  );

  function handlePrevClick() {
    if (page <= 1) return;
    onChangePage(page - 1);
  }

  function handleNextClick() {
    if (page >= totalPage) return;
    onChangePage(page + 1);
  }

  function handleClick(number) {
    onChangePage(number);
  }

  if (!pageNumbers.length) return null;

  return (
    <ul className={styles.list}>
      <li>
        <button type="button" className={styles.item} onClick={handlePrevClick}>
          <img src={arrowLeft} alt="이전 페이지" />
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            type="button"
            className={clsx(styles.item, page === number && styles.active)}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button type="button" className={styles.item} onClick={handleNextClick}>
          <img src={arrowRight} alt="다음 페이지" />
        </button>
      </li>
    </ul>
  );
}
