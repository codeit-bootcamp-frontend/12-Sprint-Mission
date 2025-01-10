"use client";

import { Pagination } from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";
import BoardItem from "./BoardItem";
import BoardListWrapper from "./BoardListWrapper";
import { Article, ListMode } from "@/types/article";
import { ListQueryParams, PaginationResponse } from "@/types/common";
import { Message } from "@/components/ui";
import useParams from "@/hooks/useParams";

interface BoardListProps extends ListQueryParams {
  mode: ListMode;
  data: PaginationResponse<Article>;
}
export default function BoardList({
  mode,
  data,
  page,
  pageSize,
  keyword,
}: BoardListProps) {
  const { list, totalCount } = data;
  const { handleParams } = useParams();

  const visibleCount = 5;

  const pagination = usePagination({
    page,
    pageSize,
    totalCount,
    visibleCount,
    onChange: (pageNumber) => {
      handleParams({ page: pageNumber.toString() });
    },
  });

  if (list.length === 0) {
    return (
      <Message>
        {keyword
          ? `"${keyword}"로 검색된 결과가 없습니다.`
          : "게시글이 없습니다."}
      </Message>
    );
  }
  return (
    <>
      <BoardListWrapper mode={mode} items={list}>
        {(item) => <BoardItem data={item} />}
      </BoardListWrapper>
      <Pagination {...pagination} />
    </>
  );
}
