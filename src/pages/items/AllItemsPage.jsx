import { useState } from "react";
import useFilteredSearchParams from "@hooks/useFilteredSearchParams";
import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import usePagination from "@hooks/usePagination";
import useLocalStorage from "@hooks/useLocalStorage";
import { getProducts } from "@service/product";
import { Select, Button } from "@components/ui";
import { Search, Recent } from "@components/Search";
import { Section } from "@components/Section";
import { Pagination } from "@components/Pagination/";
import ProductList from "./components/ProductList";
import ProductFilter from "./components/ProdcutFilter";

const rspnSize = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

const rspnCol = {
  pc: 5,
  tablet: 3,
  mobile: 2,
};

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

const defaultParams = {
  keyword: "",
  orderBy: "recent",
  page: 1,
};

const RECENT_SEARCH_SIZE = 5;

export default function AllItemsPage() {
  const [params, setParams] = useFilteredSearchParams(defaultParams);
  const [searchInput, setSearchInput] = useState(params.keyword || "");
  const [recentSearh, setRecentSearch] = useLocalStorage("keyword", []);
  const { pageSize } = usePageSize(rspnSize);
  const { isLoading, error, items, totalCount } = useList(
    getProducts,
    pageSize,
    params
  );
  const { keyword, orderBy, page } = params;
  const pagination = usePagination({
    totalCount,
    pageSize,
    page: Number(page),
    onChange: (page) => setParams((prev) => ({ ...prev, page })),
  });

  // 최근, 좋아요 필터 핸들러
  function handleOrderBy(orderBy) {
    setParams((prev) => ({ ...prev, orderBy }));
  }

  // 검색창 핸들러 (submit, change, clear)
  function handleSearchSubmit() {
    if (searchInput.trim()) {
      setRecentSearch((prev) =>
        [
          searchInput,
          ...prev.filter((keyword) => keyword !== searchInput),
        ].slice(0, RECENT_SEARCH_SIZE)
      );
    }
    //검색인풋 초기화가 좋은 UX일까? (검색취소 버튼이 나오도록, 검색어가 떠있는게 좋은것 같음)
    //setSearchInput("");
    setParams((prev) => ({ ...prev, page: 1, keyword: searchInput }));
  }

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchClear() {
    setSearchInput("");
    setParams((prev) => ({ ...prev, page: 1, keyword: "" }));
  }

  // 최근검색 이벤트 핸들러 (click, remove, clear)
  function handleRecentSearchClick(value) {
    setRecentSearch((prev) =>
      [value, ...prev.filter((keyword) => keyword !== value)].slice(
        0,
        RECENT_SEARCH_SIZE
      )
    );
    setSearchInput(value);
    setParams((prev) => ({ ...prev, page: 1, keyword: value }));
  }

  function handleRecentSearchRemove(value) {
    setRecentSearch((prev) => prev.filter((keyword) => keyword !== value));
  }

  function handleRecentSearchClear() {
    setRecentSearch([]);
  }

  return (
    <Section>
      <Section.Header title="전체 상품">
        <ProductFilter
          search={
            <Recent
              title="최근검색"
              storageKey="keyword"
              data={recentSearh}
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
            <Button to="/addItem" size="sm">
              상품 등록하기
            </Button>
          }
          filter={
            <Select
              value={orderBy}
              onChange={handleOrderBy}
              options={sortOptions}
            />
          }
        />
      </Section.Header>
      <Section.Content>
        <ProductList
          items={items}
          keyword={keyword}
          isLoading={isLoading}
          error={error}
          rspnCol={rspnCol}
        />
        <Pagination {...pagination} />
      </Section.Content>
    </Section>
  );
}
