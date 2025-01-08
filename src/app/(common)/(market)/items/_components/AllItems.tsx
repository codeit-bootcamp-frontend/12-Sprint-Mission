"use client";

import useResponsive from "@hooks/useResponsive";
import useProductList from "./useProductList";
import usePagination from "@hooks/usePagination";
import { Select, Button } from "@components/ui";
import { Search, Recent } from "@components/Search";
import { Section } from "@components/Section";
import { Pagination } from "@components/Pagination/";
import ProductFilter from "./ProductFilter";
import useRecentSearch from "./useRecentSearch";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import useParams from "@/hooks/useParams";

export default function AllItems() {
  const { searchParams, handleParams } = useParams();

  const keyword = searchParams.get("keyword") || "";
  const orderBy = searchParams.get("orderBy") || "recent";
  const page = searchParams.get("page") || 1;

  const pageSize = useResponsive({
    pc: 10,
    tablet: 6,
    mobile: 4,
  });
  const visibleCount = useResponsive({
    pc: 5,
    tablet: 4,
    mobile: 3,
  });

  const { isLoading, error, items, totalCount } = useProductList({
    page: Number(page),
    pageSize: Number(pageSize),
    keyword,
    orderBy,
  });

  const pagination = usePagination({
    page: Number(page),
    pageSize,
    totalCount,
    visibleCount: visibleCount,
    onChange: handlePage,
  });

  const {
    searchInput,
    recentSearch,
    handleSearchSubmit,
    handleSearchChange,
    handleSearchClear,
    handleRecentSearchClick,
    handleRecentSearchRemove,
    handleRecentSearchClear,
  } = useRecentSearch({ initialKeyword: keyword, onChange: handleSearch });

  function handlePage(pageNumber: number) {
    handleParams({ page: pageNumber });
  }

  function handleSearch(keyword: string) {
    handleParams({ keyword, page: 1 });
  }

  function handleOrderBy(orderBy: string) {
    handleParams({ orderBy, page: 1 });
  }

  return (
    <Section>
      <Section.Header title="전체 상품">
        <ProductFilter
          search={
            <Recent
              title="최근검색"
              data={recentSearch}
              onItemClick={handleRecentSearchClick}
              onItemClear={handleRecentSearchClear}
              onItemRemove={handleRecentSearchRemove}
            >
              <Search
                value={searchInput}
                onChange={handleSearchChange}
                onSubmit={handleSearchSubmit}
                onClear={handleSearchClear}
                placeholder="검색할 상품을 입력해주세요"
              />
            </Recent>
          }
          action={
            <Button href="/addItem" size="sm">
              상품 등록하기
            </Button>
          }
          filter={
            <Select
              value={orderBy}
              onChange={handleOrderBy}
              options={[
                { value: "recent", label: "최신순" },
                { value: "favorite", label: "좋아요순" },
              ]}
            />
          }
        />
      </Section.Header>
      <Section.Content>
        <ProductList items={items} isLoading={isLoading} error={error}>
          {(item) => <ProductItem item={item} keyword={keyword} />}
        </ProductList>
        <Pagination {...pagination} />
      </Section.Content>
    </Section>
  );
}
