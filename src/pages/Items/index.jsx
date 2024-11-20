import { getBestProducts, getProducts } from "../../service/product";
import useList from "../../hooks/useList";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ProductList from "../../components/Product/ProductList";
import Search from "../../components/Search";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSearchParams } from "react-router-dom";

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

const bestItemsResponsive = {
  pc: 4,
  tablet: 2,
  mobile: 1,
};

const itemsResponsive = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

export default function Items() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get("keyword") || "";
  const {
    isLoading: isItemsLoading,
    pagination,
    items,
    orderBy,
    keyword,
    handleOrderBy,
    handleKeyword,
  } = useList(getProducts, { initialKeyword, responsive: itemsResponsive });
  const { isLoading: isBestItemsLoading, items: bestItems } = useList(
    getBestProducts,
    { responsive: bestItemsResponsive }
  );

  function handleSubmit(keyword) {
    setSearchParams(keyword ? { keyword } : {});
    handleKeyword(keyword);
  }

  const isLoading = isItemsLoading || isBestItemsLoading;

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      <Section title="베스트 상품">
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <ProductList items={bestItems} mode="best" />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header title="전체 상품">
          <Search
            keyword={keyword}
            onSubmit={handleSubmit}
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
          <ProductList items={items} keyword={keyword} />
          <Pagination {...pagination} />
        </Section.Content>
      </Section>
    </Container>
  );
}
