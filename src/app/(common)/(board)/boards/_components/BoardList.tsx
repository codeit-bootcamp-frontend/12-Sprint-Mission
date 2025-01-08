"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";
import BoardItem from "./BoardItem";
import BoardListWrapper from "./BoardListWrapper";
import { Article } from "@/types/article";
import { ListQueryParams, PaginationResponse } from "@/types/common";
import { Message } from "@/components/ui";

interface BoardListProps extends ListQueryParams {
  data: PaginationResponse<Article>;
}
export default function BoardList({
  data,
  page,
  pageSize,
  keyword,
}: BoardListProps) {
  const { list, totalCount } = data;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const visibleCount = 5;

  const pagination = usePagination({
    page,
    pageSize,
    totalCount,
    visibleCount,
    onChange: (pageNumber) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", pageNumber.toString());
      router.push(`${pathname}?${params.toString()}`);
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
      <BoardListWrapper items={list}>
        {(item) => <BoardItem data={item} />}
      </BoardListWrapper>
      <Pagination {...pagination} />
    </>
  );
}
