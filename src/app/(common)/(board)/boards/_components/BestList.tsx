"use client";

import useResponsive from "@/hooks/useResponsive";
import BestListWrapper from "./BestListWrapper";
import BestItem from "./BestItem";
import { useEffect } from "react";
import { PaginationResponse } from "@/types/common";
import { Article } from "@/types/article";
import useParams from "@/hooks/useParams";

interface BestListProps {
  data: PaginationResponse<Article>;
}

export default function BestList({ data }: BestListProps) {
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
      <BestListWrapper items={list}>
        {(item) => <BestItem data={item} />}
      </BestListWrapper>
    </>
  );
}
