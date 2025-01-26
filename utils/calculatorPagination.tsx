import { PaginationProps } from "./types";

function calculatorPagination({
  page,
  pageCount,
  isDataCount,
  ITEMS_PER_PAGINATION: itemsPerPagination,
}:PaginationProps) {
  const totalPages = Math.ceil(pageCount / isDataCount);
  const currentSet = Math.ceil(page / itemsPerPagination);
  const startPage = (currentSet - 1) * itemsPerPagination + 1;
  const endPage = Math.min(startPage + itemsPerPagination - 1, totalPages);

  return { totalPages, currentSet, startPage, endPage };
}

export default calculatorPagination
