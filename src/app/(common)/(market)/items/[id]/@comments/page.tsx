import Comments from "@/components/Comment/Comments";
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

  return <Comments name="products" data={comments} />;
}
