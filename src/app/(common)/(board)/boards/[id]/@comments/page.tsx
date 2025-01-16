import Comments from "@/components/Comment/Comments";
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

  return <Comments name="articles" data={comments} />;
}
