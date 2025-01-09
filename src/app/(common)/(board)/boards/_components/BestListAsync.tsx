import { getArticles } from "@/service/article";
import BestList from "./BestList";
import { BoardPageQueryParams } from "../page";

interface BestListProps {
  searchParams?: Promise<Partial<BoardPageQueryParams>>;
}
export default async function BestListAsync(props: BestListProps) {
  const searchParams = await props.searchParams;
  const pageSize = Number(searchParams?.bestPageSize) || 0;

  const data = await getArticles({
    pageSize,
    orderBy: "like",
  });

  return <BestList data={data} />;
}
