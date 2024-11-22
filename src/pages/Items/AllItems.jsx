import useFilteredSearchParams from "@hooks/useFilteredSearchParams";
import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import usePagination from "@hooks/usePagination";
import { getProducts } from "@service/product";
import Select from "@components/Select";
import ProductList from "@components/Product";
import Search from "@components/Search";
import Section from "@components/Section";
import Button from "@components/Button";
import Pagination from "@components/Pagination";
import LoadingSpinner from "@components/LoadingSpinner";

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

export default function AllItems() {
  const [params, setParams] = useFilteredSearchParams({
    keyword: "",
    orderBy: "recent",
    page: 1,
  });
  const { pageSize } = usePageSize(rspnSize);
  const { isLoading, items, totalCount } = useList(
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

  function handleKeyword(keyword) {
    setParams((prev) => ({ ...prev, page: 1, keyword }));
  }

  function handleOrderBy(orderBy) {
    setParams((prev) => ({ ...prev, orderBy }));
  }

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
        <Select
          value={orderBy}
          onChange={handleOrderBy}
          options={sortOptions}
        />
      </Section.Header>
      <Section.Content>
        <ProductList
          items={items}
          keyword={keyword}
          isLoading={isLoading}
          rspnCol={rspnCol}
        />
        <Pagination {...pagination} />
      </Section.Content>
    </Section>
  );
}
