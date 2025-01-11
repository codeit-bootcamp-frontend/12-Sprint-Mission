import { getArticles } from "@/service/article";
import { Section } from "@/components/Section";
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
  const data = await getArticles({
    orderBy: "like",
    pageSize: Number(bestPageSize) || 3,
  });

  return (
    <Section>
      <Section.Header title="베스트 게시글" />
      <Section.Content>
        <BestList data={data} />
      </Section.Content>
    </Section>
  );
}
