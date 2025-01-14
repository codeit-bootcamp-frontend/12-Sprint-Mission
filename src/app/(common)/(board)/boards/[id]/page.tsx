import { Temporary } from "@/components/ui";
import { getArticle } from "@/service/article";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function BoardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  try {
    const detail = await getArticle(Number(id));

    if (!detail) {
      notFound();
    }

    return (
      <Temporary
        title="게시판 상세"
        description={`${detail.title}의 상세페이지 : 준비중`}
      />
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }

      throw new Error("게시물 정보를 가져오는데 실패했습니다");
    }

    throw new Error("알 수 없는 에러가 발생했습니다.");
  }
}
