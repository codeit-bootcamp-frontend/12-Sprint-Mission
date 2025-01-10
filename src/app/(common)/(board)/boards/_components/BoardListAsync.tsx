import { getArticles } from "@/service/article";
import { ListMode } from "@/types/article";
import BoardList from "./BoardList";
import BestList from "./BestList";

interface BoardListProps {
  mode?: ListMode;
  page?: number;
  orderBy?: string;
  keyword?: string;
  pageSize?: number;
}

export default async function BoardListAsync({
  mode = "all",
  page = 1,
  orderBy = "recent",
  keyword = "",
  pageSize = 10,
}: BoardListProps) {
  const data = await getArticles({
    page,
    pageSize,
    keyword,
    orderBy,
  });

  const Component = mode === "all" ? BoardList : BestList;

  return <Component mode={mode} data={data} />;
}
