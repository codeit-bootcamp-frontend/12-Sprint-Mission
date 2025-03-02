"use client";

import ProductItem from "./ProductItem";
import ProductListWrapper from "./ProductListWrapper";
import { useGetProducts } from "@/service/product.queries";
import { Loading } from "@/components/ui/Loading";

export default function BestList() {
  const { data, isPending } = useGetProducts("best", {
    pageSize: 4,
    orderBy: "favorite",
  });

  if (isPending) {
    return <Loading>loading...</Loading>;
  }

  const list = data?.list ?? [];

  if (list.length === 0) {
    return <div>상품이 없습니다.</div>;
  }

  return (
    <>
      <ProductListWrapper mode="best" items={list}>
        {(item) => <ProductItem item={item} />}
      </ProductListWrapper>
    </>
  );
}
