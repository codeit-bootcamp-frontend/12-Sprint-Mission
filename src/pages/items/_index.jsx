import { useState } from "react";
import useFilteredSearchParams from "@hooks/useFilteredSearchParams";
import useList from "@hooks/useList";
import usePageSize from "@hooks/usePageSize";
import usePagination from "@hooks/usePagination";
import { getBestProducts, getProducts } from "@service/product";
import useLocalArray from "@hooks/useLocalArray";
import PageContainer from "@components/PageContainer";
import Section from "@components/Section";
import ProductList from "./components/ProductList";
import Recent from "@components/Search/Recent";
import Search from "@components/Search";
import Button from "@components/Button";
import Select from "@components/Select";
import ProductFilter from "./components/ProductFilter";
import Pagination from "@components/Pagination";

export default function Items() {
  const [params, setParams] = useFilteredSearchParams({
    keyword: "",
    orderBy: "recent",
    page: 1,
  });
  const [searchInput, setSearchInput] = useState(params.keyword || "");

  const { pageSize: bestItemsPageSize } = usePageSize({
    pc: 4,
    tablet: 2,
    mobile: 1,
  });
  const { pageSize } = usePageSize({
    pc: 10,
    tablet: 6,
    mobile: 4,
  });

  const {
    isLoading: bestItemsIsLoading,
    error: bestItemsError,
    items: bestItems,
  } = useList(getBestProducts, bestItemsPageSize);
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
  const {
    data: recentKeywords,
    addData: saveKeyword,
    removeData: removeKeyword,
    clearData: clearKeyword,
  } = useLocalArray("keyword");

  function handleKeywordSubmit() {
    searchInput && saveKeyword(searchInput);
    setParams((prev) => ({ ...prev, page: 1, keyword: searchInput }));
  }

  function handleOrderBy(orderBy) {
    setParams((prev) => ({ ...prev, orderBy }));
  }

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchInputClear() {
    setSearchInput("");
    setParams((prev) => ({ ...prev, page: 1, keyword: "" }));
  }

  function handleRecentKeywordClick(keyword) {
    setSearchInput(keyword);
    setParams((prev) => ({ ...prev, page: 1, keyword }));
  }

  return (
    <PageContainer>
      <Section title="베스트 상품">
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <ProductList
            items={bestItems}
            isLoading={bestItemsIsLoading}
            error={bestItemsError}
            rspnCol={{
              pc: 4,
              tablet: 2,
              mobile: 1,
            }}
          />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header title="전체 상품">
          <ProductFilter
            search={
              <Recent
                title="최근검색"
                storageKey="keyword"
                data={recentKeywords}
                onItemClear={clearKeyword}
                onItemClick={handleRecentKeywordClick}
                onItemRemove={removeKeyword}
              >
                <Search
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  onSubmit={handleKeywordSubmit}
                  onClear={handleSearchInputClear}
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
            rspnCol={{
              pc: 5,
              tablet: 3,
              mobile: 2,
            }}
          />
          <Pagination {...pagination} />
        </Section.Content>
      </Section>
    </PageContainer>
  );
}
