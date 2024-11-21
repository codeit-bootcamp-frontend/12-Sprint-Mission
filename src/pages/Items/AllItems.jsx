import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useList from "@hooks/useList";
import { getProducts } from "@service/product";
import Filter from "@components/Filter";
import ProductList from "@components/Product/ProductList";
import Search from "@components/Search";
import Section from "@components/Section";
import Button from "@components/Button";
import Pagination from "@components/Pagination";
import LoadingSpinner from "@components/LoadingSpinner";

const itemsResponsive = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function AllItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParams = {
    keyword: searchParams.get("keyword") || "",
    orderBy: searchParams.get("orderBy") || "recent",
    page: parseInt(searchParams.get("page")) || 1,
  };
  const [params, setParams] = useState(initialParams);
  const { keyword, orderBy, page } = params;

  const { isLoading, totalCount, pageSize, items } = useList(getProducts, {
    pageSize: itemsResponsive,
    keyword,
    orderBy,
    page,
  });

  function handleKeyword(keyword) {
    setParams((prev) => ({ ...prev, keyword }));
  }

  function handleOrderBy(orderBy) {
    setParams((prev) => ({ ...prev, orderBy }));
  }

  function handlePage(page) {
    setParams((prev) => ({ ...prev, page }));
  }

  useEffect(() => {
    // 값이 없는 쿼리는 URL에 표시안되게 필터링
    const filteredParams = Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    setSearchParams(filteredParams);
  }, [params]);

  const pagination = { totalCount, page, pageSize, handlePage };

  return (
    <Section>
      {isLoading && <LoadingSpinner position="absolute" light />}
      <Section.Header title="전체 상품">
        <Search
          keyword={keyword}
          onSubmit={handleKeyword}
          placeholder="검색할 상품을 입력해주세요"
        />
        <Button to="/addItem" size="sm">
          상품 등록하기
        </Button>
        <Filter
          value={orderBy}
          onChange={handleOrderBy}
          options={sortOptions}
        />
      </Section.Header>
      <Section.Content>
        <ProductList items={items} keyword={keyword} isLoading={isLoading} />
        <Pagination {...pagination} />
      </Section.Content>
    </Section>
  );
}
