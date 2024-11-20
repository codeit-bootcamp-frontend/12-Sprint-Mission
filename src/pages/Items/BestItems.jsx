import useList from "@hooks/useList";
import LoadingSpinner from "@components/LoadingSpinner";
import ProductList from "@components/Product/ProductList";
import Section from "@components/Section";
import { getBestProducts } from "@service/product";

const itemsResponsive = {
  pc: 4,
  tablet: 2,
  mobile: 1,
};

export default function BestItems() {
  const { isLoading, items } = useList(getBestProducts, {
    pageSize: itemsResponsive,
  });

  return (
    <Section title="베스트 상품">
      {isLoading && <LoadingSpinner position="absolute" light />}
      <Section.Header title="베스트 상품" />
      <Section.Content>
        <ProductList items={items} mode="best" isLoading={isLoading} />
      </Section.Content>
    </Section>
  );
}
