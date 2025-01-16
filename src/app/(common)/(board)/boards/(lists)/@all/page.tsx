import { getArticles } from "@/service/article";
import { Section } from "@/components/Section";
import BoardList from "../_components/BoardList";
import BoardFilter from "../_components/BoardFilter";
import { Button } from "@/components/ui";

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
      <Section.Header title="게시글">
        <Button href="/addBoard" size="sm">
          글쓰기
        </Button>
      </Section.Header>
      <Section.Content>
        <BoardFilter />
        <BoardList data={data} />
      </Section.Content>
    </Section>
  );
}
