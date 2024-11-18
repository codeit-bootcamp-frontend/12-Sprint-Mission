import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ProductList from "../../components/Product/ProductList";
import Search from "../../components/Search";
import Section from "../../components/Section";
import Select from "../../components/Select";
import mockData from "./mockData.json";

const { list } = mockData;
const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function Items() {
  const [items, setItems] = useState(list);
  const [size, setSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("keyword");

  function handleKeyword(value) {
    setKeyword(value);
  }

  function handleOrder(value) {
    setOrderBy(value);
  }

  return (
    <Container>
      <Section title="베스트 상품">
        <ProductList items={list.slice(0, 4)} mode="best" />
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
              onChange={handleOrder}
              options={sortOptions}
            />
          </>
        }
      >
        <ProductList items={list} />
      </Section>
    </Container>
  );
}
