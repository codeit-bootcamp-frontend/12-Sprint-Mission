export type ListQueryParams = {
  page: number;
  pageSize: number;
  keyword: string;
  orderBy: string;
};

export type CursorParams = {
  limit: number;
  cursor: number;
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
