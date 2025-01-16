import { CommentAdd, CommentList } from "@/components/Comment";
import { getComments } from "@/service/comments";

export default async function ArticleCommentsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const comments = await getComments("articles", {
    id: Number(id),
    limit: 5,
  });

  return (
    <>
      <CommentAdd name="articles" />
      <CommentList name="articles" data={comments} />
    </>
  );
}
