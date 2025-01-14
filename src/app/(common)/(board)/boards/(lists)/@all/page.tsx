import { getArticles } from "@/service/article";
import { Section } from "@/components/Section";
import BoardList from "../_components/BoardList";
import BoardFilter from "../_components/BoardFilter";

type ItemsPageQueryParams = {
  page?: string;
  orderBy?: string;
  keyword?: string;
};
export default async function AllListPage({
  searchParams,
}: {
  searchParams: Promise<ItemsPageQueryParams>;
}) {
  const { page, orderBy, keyword } = await searchParams;
  const data = await getArticles({
    page: Number(page) || 1,
    orderBy: orderBy || "recent",
    keyword: keyword || "",
  });

  return (
    <Section>
      <Section.Header title="게시글" />
      <Section.Content>
        <BoardFilter />
        <BoardList data={data} />
      </Section.Content>
    </Section>
  );
}
