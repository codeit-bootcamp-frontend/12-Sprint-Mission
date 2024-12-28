import { useEffect } from "react";

export default function usePagination({
  page,
  pageSize,
  totalCount,
  visibleCount = 5,
  onChange,
}) {
  const totalPage = Math.ceil(totalCount / pageSize);
  const currentGroup = Math.ceil(page / visibleCount);
  const firstPageInGroup = (currentGroup - 1) * visibleCount + 1;
  const lastPageInGroup = Math.min(currentGroup * visibleCount, totalPage);
  const pageLengthInGroup = lastPageInGroup - firstPageInGroup + 1;
  const pageNumbers = Array.from(
    { length: pageLengthInGroup },
    (_, index) => firstPageInGroup + index
  );

  const isPrevDisabled = page === 1;
  const isNextDisabled = totalPage === page;

  const isPrevGroupDisabled = currentGroup === 1;
  const isNextGroupDisabled = lastPageInGroup === totalPage;

  function handleNextClick() {
    onChange(page + 1);
  }

  function handlePrevClick() {
    onChange(page - 1);
  }

  function handlePageClick(e) {
    onChange(Number(e.target.dataset.number));
  }

  function handleNextGroupClick() {
    onChange(lastPageInGroup + 1);
  }

  function handlePrevGroupClick() {
    onChange(firstPageInGroup - 1);
  }

  useEffect(() => {
    //모바일에서 뒷페이지로 이동후 pc로 돌아올때 페이지번호가 전체페이지를 넘칠때 마지막 페이지로 이동하기
    if (totalPage > 0 && page > totalPage) {
      onChange(totalPage);
    }
  }, [page, totalPage]);

  return {
    page,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
    isPrevGroupDisabled,
    isNextGroupDisabled,
    onPrevClick: handlePrevClick,
    onNextClick: handleNextClick,
    onPageClick: handlePageClick,
    onPrevGroupClick: handlePrevGroupClick,
    onNextGroupClick: handleNextGroupClick,
  };
}
