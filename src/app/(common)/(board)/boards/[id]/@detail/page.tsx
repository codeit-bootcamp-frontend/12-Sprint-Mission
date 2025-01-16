import { getArticle } from "@/service/article";
import { notFound } from "next/navigation";
import BoardDetail from "../../../_components/BoardDetail";
import { AxiosError } from "axios";

export default async function BoardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  try {
    const detail = await getArticle(Number(id));

    return <BoardDetail detail={detail} />;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status === 404) {
        notFound();
      }
    }

    throw new Error("페이지 정보를 가져오는데 문제가 생겼습니다.");
  }
}
