import clsx from "clsx";
import arrowLeft from "@assets/img/icon/icon_arrow_left.svg";
import arrowRight from "@assets/img/icon/icon_arrow_right.svg";
import styles from "./styles.module.scss";
import { useEffect } from "react";

export default function Pagination({
  totalCount,
  page,
  pageSize,
  handlePage,
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

  useEffect(() => {
    //모바일에서 뒷페이지로 이동후 pc로 돌아올때 페이지번호가 전체페이지를 넘칠때 마지막 페이지로 이동하기
    if (totalPage > 0 && page > totalPage) {
      handlePage(totalPage);
    }
  }, [page, totalPage]);

  function handlePrevClick() {
    if (page <= 1) return;
    handlePage(page - 1);
  }

  function handleNextClick() {
    if (page >= totalPage) return;
    handlePage(page + 1);
  }

  function handleClick(number) {
    handlePage(number);
  }

  if (!pageNumbers.length) return null;

  const isPrevDisabeld = page === 1;
  const isNextDisabled = totalPage === page;

  return (
    <ul className={styles.list}>
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={handlePrevClick}
          disabled={isPrevDisabeld}
        >
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
