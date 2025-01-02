import { FieldError } from "react-hook-form";

export type ListQueryParams = {
  page: number;
  pageSize: number;
  keyword: string;
  orderBy: string;
};

export type PaginationResponse<T> = {
  totalCount: number;
  list: T[];
};

export type BaseData = {
  updatedAt: string;
  createdAt: string;
  id: number;
};

export type DefaultFieldState = {
  error?: FieldError | undefined;
  invalid: boolean;
  isTouched: boolean;
  isDirty: boolean;
  isValidating: boolean;
};
