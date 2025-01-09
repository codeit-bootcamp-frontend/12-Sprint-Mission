import { getComments } from "@/service/comments";
import { BoardName } from "@/types/comment";
import Comments from "./Comments";

export default async function CommentsAsync({
  name,
  params,
}: {
  name: BoardName;
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const comments = await getComments(name, {
    productId: Number(id),
    limit: 5,
  });

  return <Comments name={name} data={comments} />;
}
