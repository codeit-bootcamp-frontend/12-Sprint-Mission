"use client";

import { useEffect } from "react";
import useResponsive from "@/hooks/useResponsive";
import useParams from "@/hooks/useParams";
import { PaginationResponse } from "@/types/common";
import { Product } from "@/types/product";
import ProductItem from "./ProductItem";
import ProductListWrapper from "./ProductListWrapper";

interface BestListProps {
  data: PaginationResponse<Product>;
}

export default function BestList({ data }: BestListProps) {
  const { searchParams, handleParams } = useParams();
  const currentSize = Number(searchParams.get("bestPageSize")) || 4;
  const pageSize = useResponsive({
    pc: 4,
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
      <ProductListWrapper mode="best" items={list}>
        {(item) => <ProductItem item={item} />}
      </ProductListWrapper>
    </>
  );
}
