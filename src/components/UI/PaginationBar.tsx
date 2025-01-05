import { useMemo } from "react";
import styled from "styled-components";
import LeftArrow from "@/assets/images/icons/ic_arrow_left.svg?react";
import RightArrow from "@/assets/images/icons/ic_arrow_right.svg?react";

interface PaginationBarProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (page: number) => void;
}

const PaginationBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--secondary-200);
  border-radius: 4rem;
  width: 4rem;
  height: 4rem;
  color: var(--secondary-500);
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.6rem;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &.active {
    background-color: #2f80ed;
    color: var(--color-white);
  }

  ${({ active }) =>
    active &&
    `
    background-color: #2f80ed;
    color: var(--color-white);
  `}
`;

function PaginationBar({
  totalPageNum,
  activePageNum,
  onPageChange,
}: PaginationBarProps) {
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

  const handlePageChange = (change: number) => {
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
    <PaginationBarWrapper>
      <PaginationButton
        disabled={activePageNum === 1}
        onClick={() => handlePageChange(-5)}
      >
        <LeftArrow />
      </PaginationButton>

      {pages.map((page) => (
        <PaginationButton
          key={page}
          active={activePageNum === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        disabled={activePageNum === totalPageNum}
        onClick={() => handlePageChange(5)}
      >
        <RightArrow />
      </PaginationButton>
    </PaginationBarWrapper>
  );
}

export default PaginationBar;
