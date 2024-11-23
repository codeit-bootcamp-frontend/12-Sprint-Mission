import { useMemo } from "react";
import "./PaginationBar.css";
import { ReactComponent as LeftArrow } from "../../assets/images/icons/ic_arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/images/icons/ic_arrow_right.svg";

function PaginationBar({ totalPageNum, activePageNum, onPageChange }) {
  const maxVisiblePages = 5;

  const { pages } = useMemo(() => {
    if (totalPageNum <= maxVisiblePages) {
      return {
        pages: Array.from({ length: totalPageNum }, (_, i) => i + 1),
      };
    }

    const halfRange = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(activePageNum - halfRange, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPageNum);

    if (endPage === totalPageNum) {
      startPage = Math.max(totalPageNum - maxVisiblePages + 1, 1);
    }

    return {
      pages: Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ),
    };
  }, [totalPageNum, activePageNum]);

  const handlePageChange = (change) => {
    let newPage = activePageNum + change;

    if (newPage < 1) {
      newPage = activePageNum - 1;
    } else if (newPage > totalPageNum) {
      newPage = activePageNum + 1;
    }

    if (newPage >= 1 && newPage <= totalPageNum) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePageNum === 1}
        onClick={() => handlePageChange(-5)}
      >
        <LeftArrow />
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
        onClick={() => handlePageChange(5)}
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default PaginationBar;
