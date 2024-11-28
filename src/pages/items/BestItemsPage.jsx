import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import { getProducts } from "@service/product";
import { Section } from "@components/Section";
import ProductList from "./components/ProductList";

const rspnSize = {
  pc: 4,
  tablet: 2,
  mobile: 1,
};

const rspnCol = {
  pc: 4,
  tablet: 2,
  mobile: 1,
};

export default function BestItemsPage() {
  const { pageSize } = usePageSize(rspnSize);
  const { isLoading, error, items } = useList(getProducts, {
    pageSize,
    orderBy: "favorite",
  });

  return (
    <Section title="베스트 상품">
      <Section.Header title="베스트 상품" />
      <Section.Content>
        <ProductList
          items={items}
          isLoading={isLoading}
          error={error}
          rspnCol={rspnCol}
        />
      </Section.Content>
    </Section>
  );
}
