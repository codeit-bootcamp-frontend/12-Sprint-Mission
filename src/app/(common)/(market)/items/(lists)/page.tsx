import { PageWrapper } from "@/components/Page";
import { Section } from "@/components/Section";
import BestList from "./_components/BestList";
import ProductFilter from "./_components/ProductFilter";
import ProductList from "./_components/ProductList";
import { Suspense } from "react";
import { Loading } from "@/components/ui/Loading";

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
