import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ProductList from "../../components/Product/ProductList";
import Search from "../../components/Search";
import Section from "../../components/Section";
import Select from "../../components/Select";
import { getBestProducts, getProducts } from "../../service/product";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Pagination from "../../components/Pagination";

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function Items() {
  const {
    isLoading,
    totalCount,
    page,
    pageSize,
    handlePage,
    items,
    orderBy,
    keyword,
    handleOrderBy,
    handleKeyword,
  } = useProduct(getProducts);
  const { items: bestItems } = useProduct(getBestProducts);

  return (
    <Container>
      <Section title="베스트 상품">
        <ProductList items={bestItems} mode="best" />
      </Section>
      <Section
        title="전체 상품"
        filter={
          <>
            <Search
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
          </>
        }
      >
        <ProductList items={items} keyword={keyword} />
        <Pagination
          totalCount={totalCount}
          page={page}
          pageSize={pageSize}
          onChangePage={handlePage}
        />
      </Section>
    </Container>
  );
}
