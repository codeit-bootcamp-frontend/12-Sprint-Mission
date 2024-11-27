import { useEffect } from "react";

export default function usePagination({
  totalCount,
  page,
  pageSize,
  onChange,
  visibleCount = 5,
}) {
  const totalPage = Math.ceil(totalCount / pageSize);
  const currentGroup = Math.ceil(page / visibleCount);
  const firstPageInGroup = (currentGroup - 1) * visibleCount + 1;
  const lastPageInGroup = Math.min(currentGroup * visibleCount, totalPage);
  const pageLengthInGroup = Math.max(lastPageInGroup - firstPageInGroup + 1, 0);
  const pageNumbers = Array.from(
    { length: pageLengthInGroup },
    (_, index) => firstPageInGroup + index
  );

  const isPrevDisabled = page === 1;
  const isNextDisabled = totalPage === page;

  function handleNextClick() {
    onChange(page + 1);
  }

  function handlePrevClick() {
    onChange(page - 1);
  }

  function handlePageClick(e) {
    onChange(Number(e.target.dataset.number));
  }

  useEffect(() => {
    //모바일에서 뒷페이지로 이동후 pc로 돌아올때 페이지번호가 전체페이지를 넘칠때 마지막 페이지로 이동하기
    if (totalPage > 0 && page > totalPage) {
      onChange(totalPage);
    }
  }, [page, totalPage]);

  return {
    page,
    totalPage,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
    handlePrevClick,
    handleNextClick,
    handlePageClick,
  };
}
