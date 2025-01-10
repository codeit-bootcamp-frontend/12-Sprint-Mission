"use client";

import useResponsive from "@/hooks/useResponsive";
import BestItem from "./BestItem";
import BoardListWrapper from "./BoardListWrapper";
import { useEffect } from "react";
import { PaginationResponse } from "@/types/common";
import { Article, ListMode } from "@/types/article";
import useParams from "@/hooks/useParams";

interface BestListProps {
  mode: ListMode;
  data: PaginationResponse<Article>;
}

export default function BestList({ mode, data }: BestListProps) {
  const { searchParams, handleParams } = useParams();
  const currentSize = Number(searchParams.get("bestPageSize")) || 0;
  const pageSize = useResponsive({
    pc: 3,
    tablet: 2,
    mobile: 1,
  });
  const { list } = data;

  useEffect(() => {
    if (pageSize === currentSize) return;

    handleParams({ bestPageSize: pageSize });
  }, [pageSize, currentSize, handleParams]);

  return (
    <>
      <BoardListWrapper mode={mode} items={list}>
        {(item) => <BestItem data={item} />}
      </BoardListWrapper>
    </>
  );
}
