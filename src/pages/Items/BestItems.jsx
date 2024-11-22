import usePageSize from "@hooks/usePageSize";
import useList from "@hooks/useList";
import { getBestProducts } from "@service/product";
import LoadingSpinner from "@components/LoadingSpinner";
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
  const { isLoading, items } = useList(getBestProducts, pageSize);

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
