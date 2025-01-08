import { Temporary } from "@/components/ui";
import { getArticle } from "@/service/article";

export default async function BoardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const detail = await getArticle(Number(id));

  return (
    <Temporary
      title="게시판 상세"
      description={`${detail.title}의 상세페이지 : 준비중`}
    />
  );
}
