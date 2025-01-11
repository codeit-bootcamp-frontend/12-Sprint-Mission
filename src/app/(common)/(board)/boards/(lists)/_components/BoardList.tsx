"use client";

import useParams from "@/hooks/useParams";
import usePagination from "@/hooks/usePagination";
import { PaginationResponse } from "@/types/common";
import { Article } from "@/types/article";
import { Pagination } from "@/components/Pagination";
import { Message } from "@/components/ui";
import BoardItem from "./BoardItem";
import BoardListWrapper from "./BoardListWrapper";

interface BoardListProps {
  data: PaginationResponse<Article>;
}
export default function BoardList({ data }: BoardListProps) {
  const { searchParams, handleParams } = useParams();
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const keyword = searchParams.get("keyword") || "";
  const visibleCount = 5;
  const { list, totalCount } = data;

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
      <BoardListWrapper mode="all" items={list}>
        {(item) => <BoardItem data={item} />}
      </BoardListWrapper>
      <Pagination {...pagination} />
    </>
  );
}
