import { getArticles } from "@/service/article";
import BoardList from "./BoardList";

interface BoardPageProps {
  searchParams?: Promise<{
    page?: string;
    orderBy?: string;
    keyword?: string;
  }>;
}

export default async function BoardListAsync(props: BoardPageProps) {
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
