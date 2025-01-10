"use client";

import { useEffect } from "react";
import useParams from "@/hooks/useParams";
import usePagination from "@/hooks/usePagination";
import useResponsive from "@/hooks/useResponsive";
import { ListMode, Product } from "@type/product";
import { PaginationResponse } from "@/types/common";
import { Message } from "@components/ui";
import { Pagination } from "@/components/Pagination";
import ProductListWrapper from "./ProductListWrapper";
import ProductItem from "./ProductItem";

interface ProductListProps {
  mode: ListMode;
  data: PaginationResponse<Product>;
}

export default function ProductList({ mode, data }: ProductListProps) {
  const { searchParams, handleParams } = useParams();
  const page = Number(searchParams.get("page")) || 1;
  const currentPageSize = Number(searchParams.get("pageSize")) || 10;
  const keyword = searchParams.get("keyword") || "";
  const pageSize = useResponsive({
    pc: 10,
    tablet: 6,
    mobile: 4,
  });
  const visibleCount = 5;
  const { list, totalCount } = data;

  useEffect(() => {
    if (pageSize === currentPageSize) return;

    handleParams({ pageSize });
  }, [pageSize, currentPageSize, handleParams]);

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
      <ProductListWrapper mode={mode} items={list}>
        {(item) => <ProductItem item={item} keyword={keyword} />}
      </ProductListWrapper>
      <Pagination {...pagination} />
    </>
  );
}
