import { PageWrapper } from "@/components/Page";
import { CommentAdd, CommentList } from "@/components/Comment";
import BoardDetail from "../../_components/BoardDetail";

export default function ArticleDetailPage() {
  return (
    <PageWrapper>
      <BoardDetail />
      <CommentAdd name="articles" />
      <CommentList name="articles" />
    </PageWrapper>
  );
}
