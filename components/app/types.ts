import { ReactNode } from "react";

// ScrollToTop.jsx
export interface Props {
  children?: ReactNode;
}

// Pagination.jsx
export interface Pagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  isDataCount: number;
}

export interface ArrowButton {
  startPage: number;
  endPage: number;
}
