"use client";

import useRecentSearch from "@/hooks/useRecentSearch";
import useParams from "@/hooks/useParams";
import { Recent, Search } from "@/components/Search";
import { Button, Select } from "@/components/ui";
import styles from "./ProductFilter.module.scss";

export default function ProductFilter() {
  const { searchParams, handleParams } = useParams();

  const keyword = searchParams.get("keyword") || "";
  const orderBy = searchParams.get("orderBy") || "recent";

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

  function handleSearch(keyword: string) {
    handleParams({ keyword, page: 1 });
  }

  function handleOrderBy(orderBy: string) {
    handleParams({ orderBy, page: 1 });
  }

  return (
    <>
      <div className={styles.search}>
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
      </div>
      <div className={styles.button}>
        <Button href="/addItem" size="sm">
          상품 등록하기
        </Button>
      </div>
      <div className={styles.select}>
        <Select
          value={orderBy}
          onChange={handleOrderBy}
          options={[
            { value: "recent", label: "최신순" },
            { value: "favorite", label: "좋아요순" },
          ]}
        />
      </div>
    </>
  );
}
