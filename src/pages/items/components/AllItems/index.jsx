import useFilteredSearchParams from "@hooks/useFilteredSearchParams";
import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import usePagination from "@hooks/usePagination";
import useLocalArray from "@/hooks/useLocalArray";
import { getProducts } from "@service/product";
import Select from "@components/Select";
import Search from "@components/Search";
import Section from "@components/Section";
import Button from "@components/Button";
import Pagination from "@components/Pagination";
import Recent from "@/components/Search/Recent";
import ProductList from "../ProductList";
import styles from "./styles.module.scss";

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

export default function AllItems() {
  const [params, setParams] = useFilteredSearchParams(defaultParams);
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
  const {
    data: recentKeywords,
    addData: saveKeyword,
    removeData: removeKeyword,
    clearData: clearKeyword,
  } = useLocalArray("keyword");

  function handleKeyword(keyword) {
    keyword && saveKeyword(keyword);
    setParams((prev) => ({ ...prev, page: 1, keyword }));
  }

  function handleOrderBy(orderBy) {
    setParams((prev) => ({ ...prev, orderBy }));
  }

  return (
    <Section>
      <Section.Header title="전체 상품">
        <div className={styles.search}>
          <Recent
            title="최근검색"
            storageKey="keyword"
            data={recentKeywords}
            onItemClear={clearKeyword}
            onItemClick={handleKeyword}
            onItemRemove={removeKeyword}
          >
            <Search
              value={keyword}
              onSubmit={handleKeyword}
              placeholder="검색할 상품을 입력해주세요"
            />
          </Recent>
        </div>
        <div className={styles.button}>
          <Button to="/addItem" size="sm">
            상품 등록하기
          </Button>
        </div>
        <div className={styles.select}>
          <Select
            value={orderBy}
            onChange={handleOrderBy}
            options={sortOptions}
          />
        </div>
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
