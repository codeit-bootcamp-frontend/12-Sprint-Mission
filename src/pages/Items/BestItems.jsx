import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import { getBestProducts } from "@service/product";
import ProductList from "@components/Product";
import Section from "@components/Section";

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

export default function BestItems() {
  const { pageSize } = usePageSize(rspnSize);
  const { isLoading, error, items } = useList(getBestProducts, pageSize);

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
