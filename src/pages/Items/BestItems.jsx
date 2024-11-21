import useList from "@hooks/useList";
import LoadingSpinner from "@components/LoadingSpinner";
import ProductList from "@components/Product/ProductList";
import Section from "@components/Section";
import { getBestProducts } from "@service/product";

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
  const { isLoading, items } = useList(getBestProducts, rspnSize);

  return (
    <Section title="베스트 상품">
      {isLoading && <LoadingSpinner position="absolute" light />}
      <Section.Header title="베스트 상품" />
      <Section.Content>
        <ProductList items={items} isLoading={isLoading} rspnCol={rspnCol} />
      </Section.Content>
    </Section>
  );
}
