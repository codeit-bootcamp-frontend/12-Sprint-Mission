"use client";

import useParams from "@/hooks/useParams";
import usePagination from "@/hooks/usePagination";
import { Pagination } from "@/components/Pagination";
import { Message } from "@/components/ui";
import BoardItem from "./BoardItem";
import BoardListWrapper from "./BoardListWrapper";
import { useGetArticles } from "@/service/article.queries";
import { Loading } from "@/components/ui/Loading";

export default function BoardList() {
  const { searchParams, handleParams } = useParams();

  const page = Number(searchParams.get("page")) || 1;
  const keyword = searchParams.get("keyword") || "";
  const pageSize = 10;
  const visibleCount = 5;

  const { data, isPending } = useGetArticles("all", {
    page,
    pageSize,
    keyword,
  });

  const pagination = usePagination({
    page,
    pageSize,
    totalCount: data?.totalCount || 0,
    visibleCount,
    onChange: (pageNumber) => {
      handleParams({ page: pageNumber.toString() });
    },
  });

  const list = data?.list ?? [];

  if (isPending) {
    return <Loading>loading...</Loading>;
  }

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
