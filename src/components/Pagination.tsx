import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import IcPrev from "../assets/arrow_left.svg";
import IcNext from "../assets/arrow_right.svg";

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 40px;
`;
const PaginationButton = css`
  display: block;
  width: 40px;
  height: 40px;
  border: 1px solid var(--gray-scale-200);
  border-radius: 40px;
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  line-height: 40px;
  text-align: center;
  color: var(--gray-scale-500);
  background-color: var(--gray-scale-0);
  cursor: pointer;
`;
const PaginationPrevButton = styled.button`
  ${PaginationButton};
  background: url("${IcPrev}") no-repeat center;
`;
const StyledPaginationButton = styled.button`
  ${PaginationButton};
  &.active {
    background-color: var(--primary-color-150);
    color: white;
    font-weight: bold;
  }
`;
const PaginationNextButton = styled.button`
  ${PaginationButton};
  background: url("${IcNext}") no-repeat center;
`;

// 타입 설정
type PaginationProps = {
  page: number;
  pageSize: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
};

function Pagination({ page, pageSize, setPage, totalCount }: PaginationProps) {
  const btnRange = 5;
  const currentSet = Math.ceil(page / btnRange);
  const startPage = (currentSet - 1) * btnRange + 1;
  const totalPage = Math.ceil(totalCount / pageSize);
  const endPage = Math.min(startPage + btnRange - 1, totalPage);

  return (
    <PaginationBox>
      {currentSet > 1 && (
        <PaginationPrevButton
          className="btn-prev"
          onClick={() => setPage(startPage - 1)}
        />
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <StyledPaginationButton
          key={i}
          onClick={() => setPage(startPage + i)}
          className={page === startPage + i ? "active" : ""}
        >
          {startPage + i}
        </StyledPaginationButton>
      ))}
      {currentSet < Math.ceil(totalPage / btnRange) && (
        <PaginationNextButton
          className="btn-next"
          onClick={() => setPage(endPage + 1)}
        />
      )}
    </PaginationBox>
  );
}

export default Pagination;
