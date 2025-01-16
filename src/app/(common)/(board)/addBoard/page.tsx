import { PageWrapper } from "@/components/Page";
import ArticleForm from "../_components/ArticleForm";

export default function AddBoardPage() {
  return (
    <PageWrapper>
      <ArticleForm mode="add" />
    </PageWrapper>
  );
}
