import useResponsive from "@hooks/useResponsive";
import useProductList from "./components/useProductList";
import { getProducts } from "@service/product";
import { Section } from "@components/Section";
import ProductList from "./components/ProductList";

export default function BestItemsPage() {
  const pageSize = useResponsive({
    pc: 4,
    tablet: 2,
    mobile: 1,
  });
  const { isLoading, error, items } = useProductList(getProducts, {
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
          rspnCol={{
            pc: 4,
            tablet: 2,
            mobile: 1,
          }}
        />
      </Section.Content>
    </Section>
  );
}
