import { getComments } from "@/service/comments";
import { BoardName } from "@/types/comment";
import Comments from "./Comments";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function CommentsAsync({
  name,
  id,
}: {
  name: BoardName;
  id: string;
}) {
  try {
    const comments = await getComments(name, {
      productId: Number(id),
      limit: 5,
    });

    return <Comments name={name} data={comments} />;
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
