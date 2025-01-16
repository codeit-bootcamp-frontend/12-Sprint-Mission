import { CommentAdd, CommentList } from "@/components/Comment";
import { getComments } from "@/service/comments";

export default async function ItemCommentsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const comments = await getComments("products", {
    id: Number(id),
    limit: 5,
  });

  return (
    <>
      <CommentAdd name="products" />
      <CommentList name="products" data={comments} />
    </>
  );
}
