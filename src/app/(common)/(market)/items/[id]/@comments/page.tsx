import Comments from "@/app/(common)/_components/Comments";
import { getComments } from "@/service/comments";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function ItemCommentsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  try {
    const comments = await getComments("products", {
      id: Number(id),
      limit: 5,
    });

    return <Comments name="products" data={comments} />;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }

      throw new Error("댓글 정보를 가져오는데 실패했습니다");
    }

    throw new Error("알 수 없는 에러가 발생했습니다.");
  }
}
