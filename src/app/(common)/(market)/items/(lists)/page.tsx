import { PageWrapper } from "@/components/Page";
import { Section } from "@/components/Section";
import BestList from "./_components/BestList";
import ProductFilter from "./_components/ProductFilter";
import ProductList from "./_components/ProductList";

export default function ItemsPage() {
  return (
    <PageWrapper>
      <Section>
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <BestList />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header title="전체 상품">
          <ProductFilter />
        </Section.Header>
        <Section.Content>
          <ProductList />
        </Section.Content>
      </Section>
    </PageWrapper>
  );
}
