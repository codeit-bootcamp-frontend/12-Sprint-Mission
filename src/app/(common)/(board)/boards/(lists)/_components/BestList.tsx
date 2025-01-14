"use client";

import { useEffect } from "react";
import useResponsive from "@/hooks/useResponsive";
import useParams from "@/hooks/useParams";
import { PaginationResponse } from "@/types/common";
import { Article } from "@/types/article";
import BoardListWrapper from "./BoardListWrapper";
import BestItem from "./BestItem";

interface BestListProps {
  data: PaginationResponse<Article>;
}

export default function BestList({ data }: BestListProps) {
  const { searchParams, handleParams } = useParams();
  const currentSize = Number(searchParams.get("bestPageSize")) || 3;
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
      <BoardListWrapper mode="best" items={list}>
        {(item) => <BestItem data={item} />}
      </BoardListWrapper>
    </>
  );
}
