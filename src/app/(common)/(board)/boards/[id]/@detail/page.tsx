import { getArticle } from "@/service/article";
import { notFound } from "next/navigation";
import BoardDetail from "../../../_components/BoardDetail";

export default async function BoardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const detail = await getArticle(Number(id));

  if (!detail) {
    notFound();
  }

  return <BoardDetail detail={detail} />;
}
