"use client";

import useParams from "@/hooks/useParams";
import { Recent, Search } from "@/components/Search";
import { Select } from "@/components/ui";
import styles from "./BoardFilter.module.scss";
import useRecentSearch from "@/hooks/useRecentSearch";

export default function BoardFilter() {
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
    <div className={styles.filter}>
      <div className={styles.keyword}>
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
            placeholder="검색어를 입력해주세요."
          />
        </Recent>
      </div>
      <div className={styles.order}>
        <Select
          value={orderBy}
          onChange={handleOrderBy}
          options={[
            { value: "recent", label: "최신순" },
            { value: "like", label: "좋아요순" },
          ]}
        />
      </div>
    </div>
  );
}
