import { Section } from "@/components/Section";
import { getProducts } from "@/service/product";
import BestList from "../_components/BestList";

type BestItemsPageQueryParams = {
  bestPageSize?: string;
};

export default async function BestListPage({
  searchParams,
}: {
  searchParams: Promise<BestItemsPageQueryParams>;
}) {
  const { bestPageSize } = await searchParams;
  const data = await getProducts({
    orderBy: "favorite",
    pageSize: Number(bestPageSize) || 4,
  });

  return (
    <Section>
      <Section.Header title="베스트 상품" />
      <Section.Content>
        <BestList data={data} />
      </Section.Content>
    </Section>
  );
}
