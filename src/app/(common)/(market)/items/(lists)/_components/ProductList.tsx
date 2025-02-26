"use client";

import { useEffect } from "react";
import useParams from "@/hooks/useParams";
import usePagination from "@/hooks/usePagination";
import useResponsive from "@/hooks/useResponsive";
import { Message } from "@components/ui";
import { Pagination } from "@/components/Pagination";
import ProductListWrapper from "./ProductListWrapper";
import ProductItem from "./ProductItem";
import { useGetProducts } from "@/service/product.queries";
import { Loading } from "@/components/ui/Loading";

export default function ProductList() {
  const { searchParams, handleParams } = useParams();

  const page = Number(searchParams.get("page")) || 1;
  const currentPageSize = Number(searchParams.get("pageSize")) || 10;
  const keyword = searchParams.get("keyword") || "";
  const visibleCount = 5;
  const pageSize = useResponsive({
    pc: 10,
    tablet: 6,
    mobile: 4,
  });

  const { data, isPending } = useGetProducts("all", {
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

  useEffect(() => {
    if (pageSize === currentPageSize) return;

    handleParams({ pageSize });
  }, [pageSize, currentPageSize, handleParams]);

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
      <ProductListWrapper mode="all" items={list}>
        {(item) => <ProductItem item={item} keyword={keyword} />}
      </ProductListWrapper>
      <Pagination {...pagination} />
    </>
  );
}
