import { Pagination } from "./types";

export function calculatePagination({
  page,
  pageCount,
  isDataCount,
  ITEMS_PER_PAGINATION,
}:Pagination) {
  const totalPages = Math.ceil(pageCount / isDataCount);
  const currentSet = Math.ceil(page / ITEMS_PER_PAGINATION);
  const startPage = (currentSet - 1) * ITEMS_PER_PAGINATION + 1;
  const endPage = Math.min(startPage + ITEMS_PER_PAGINATION - 1, totalPages);

  return { totalPages, currentSet, startPage, endPage };
}
