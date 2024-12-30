import { PageWrapper } from "@components/Page";
import BestItemsPage from "./BestItemsPage";
import AllItemsPage from "./AllItemsPage";

export default function ItemsPage() {
  return (
    <PageWrapper>
      <BestItemsPage />
      <AllItemsPage />
    </PageWrapper>
  );
}
