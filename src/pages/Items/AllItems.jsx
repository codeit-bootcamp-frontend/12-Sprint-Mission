import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useList from "../../hooks/useList";
import { getProducts } from "../../service/product";
import Filter from "../../components/Filter";
import ProductList from "../../components/Product/ProductList";
import Search from "../../components/Search";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import LoadingSpinner from "../../components/LoadingSpinner";

const itemsResponsive = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function AllItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(initialKeyword);
  const [orderBy, setOrderBy] = useState("recent");

  const { isLoading, pagination, items } = useList(getProducts, {
    pageSize: itemsResponsive,
    params: { orderBy, keyword },
  });

  function handleSubmit(keyword) {
    setSearchParams(keyword ? { keyword } : {});
    setKeyword(keyword);
  }

  return (
    <Section>
      {isLoading && <LoadingSpinner position="absolute" light />}
      <Section.Header title="전체 상품">
        <Search
          keyword={keyword}
          onSubmit={handleSubmit}
          placeholder="검색할 상품을 입력해주세요"
        />
        <Button to="/addItem" size="sm">
          상품 등록하기
        </Button>
        <Filter value={orderBy} onChange={setOrderBy} options={sortOptions} />
      </Section.Header>
      <Section.Content>
        <ProductList items={items} keyword={keyword} />
        <Pagination {...pagination} />
      </Section.Content>
    </Section>
  );
}
