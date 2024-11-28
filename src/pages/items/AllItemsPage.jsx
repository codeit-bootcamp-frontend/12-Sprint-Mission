import useFilteredSearchParams from "@hooks/useFilteredSearchParams";
import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import usePagination from "@hooks/usePagination";
import { getProducts } from "@service/product";
import { Select, Button } from "@components/ui";
import { Search, Recent } from "@components/Search";
import { Section } from "@components/Section";
import { Pagination } from "@components/Pagination/";
import ProductList from "./components/ProductList";
import ProductFilter from "./components/ProdcutFilter";
import useRecentSearch from "./components/useRecentSearch";

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

export default function AllItemsPage() {
  const [params, setParams] = useFilteredSearchParams({
    keyword: "",
    orderBy: "recent",
    page: 1,
  });
  const { keyword, orderBy, page } = params;
  const { pageSize } = usePageSize(rspnSize);
  const { isLoading, error, items, totalCount } = useList(getProducts, {
    page,
    pageSize,
    keyword,
    orderBy,
  });

  const pagination = usePagination({
    page: Number(page),
    pageSize,
    totalCount,
    visibleCount: 5,
    onChange: handlePage,
  });

  const {
    searchInput,
    recentSearh,
    handleSearchSubmit,
    handleSearchChange,
    handleSearchClear,
    handleRecentSearchClick,
    handleRecentSearchRemove,
    handleRecentSearchClear,
  } = useRecentSearch({ initialKeyword: keyword, onChange: handleSearch });

  function handlePage(page) {
    setParams((prev) => ({ ...prev, page }));
  }

  function handleSearch(keyword) {
    setParams((prev) => ({ ...prev, page: 1, keyword }));
  }

  function handleOrderBy(orderBy) {
    setParams((prev) => ({ ...prev, orderBy }));
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
              options={[
                { value: "recent", label: "최신순" },
                { value: "favorite", label: "좋아요순" },
              ]}
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
