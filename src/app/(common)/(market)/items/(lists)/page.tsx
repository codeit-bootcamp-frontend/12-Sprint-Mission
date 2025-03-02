import { Suspense } from "react";
import { PageWrapper } from "@/components/Page";
import { Section } from "@/components/Section";
import { Loading } from "@/components/ui";
import BestList from "@/components/market/BestList";
import ProductFilter from "@/components/market/ProductFilter";
import ProductList from "@/components/market/ProductList";

export default function ItemsPage() {
  return (
    <PageWrapper>
      <Section>
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <Suspense fallback={<Loading>loading...</Loading>}>
            <BestList />
          </Suspense>
        </Section.Content>
      </Section>
      <Section>
        <Suspense fallback={<Loading>loading...</Loading>}>
          <Section.Header title="전체 상품">
            <ProductFilter />
          </Section.Header>
          <Section.Content>
            <ProductList />
          </Section.Content>
        </Suspense>
      </Section>
    </PageWrapper>
  );
}
