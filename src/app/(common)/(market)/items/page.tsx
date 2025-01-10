import { PageWrapper } from "@/components/Page";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import { Section } from "@/components/Section";
import ProductListAsync from "./_components/ProductListAsync";
import ProductFilter from "./_components/ProductFilter";

export type ItemsPageQueryParams = {
  page?: string;
  orderBy?: string;
  keyword?: string;
  pageSize?: string;
  bestPageSize?: string;
};

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: Promise<ItemsPageQueryParams>;
}) {
  const { page, orderBy, keyword, pageSize, bestPageSize } = await searchParams;

  return (
    <PageWrapper>
      <Section>
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <Suspense
            fallback={<Message>베스트 상품을 불러오는중입니다...</Message>}
          >
            <ProductListAsync
              mode="best"
              orderBy="favorite"
              pageSize={Number(bestPageSize) || 4}
            />
          </Suspense>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header title="전체 상품">
          <Suspense>
            <ProductFilter />
          </Suspense>
        </Section.Header>
        <Section.Content>
          <Suspense
            fallback={<Message>전체 상품을 불러오는중입니다....</Message>}
          >
            <ProductListAsync
              mode="all"
              page={Number(page) || 1}
              orderBy={orderBy}
              keyword={keyword}
              pageSize={Number(pageSize) || 10}
            />
          </Suspense>
        </Section.Content>
      </Section>
    </PageWrapper>
  );
}
