import { getArticles } from "@/service/article";
import BoardList from "./BoardList";
import { BoardPageQueryParams } from "../page";

interface BoardListProps {
  searchParams?: Promise<Partial<BoardPageQueryParams>>;
}

export default async function BoardListAsync(props: BoardListProps) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const pageSize = 10;
  const orderBy = searchParams?.orderBy || "recent";
  const keyword = searchParams?.keyword || "";

  const data = await getArticles({
    page,
    pageSize,
    keyword,
    orderBy,
  });

  return (
    <BoardList
      data={data}
      page={page}
      pageSize={pageSize}
      keyword={keyword}
      orderBy={orderBy}
    />
  );
}
