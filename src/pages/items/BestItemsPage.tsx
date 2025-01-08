import useResponsive from "@hooks/useResponsive";
import useProductList from "./components/useProductList";
import { Section } from "@components/Section";
import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";

export default function BestItemsPage() {
  const pageSize = useResponsive({
    pc: 4,
    tablet: 2,
    mobile: 1,
  });
  const { isLoading, error, items } = useProductList({
    pageSize,
    orderBy: "favorite",
  });

  return (
    <Section>
      <Section.Header title="베스트 상품" />
      <Section.Content>
        <ProductList
          items={items}
          isLoading={isLoading}
          error={error}
          mode="best"
        >
          {(item) => <ProductItem item={item} />}
        </ProductList>
      </Section.Content>
    </Section>
  );
}
