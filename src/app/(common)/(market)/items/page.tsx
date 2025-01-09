import { PageWrapper } from "@/components/Page";
import BestItems from "../_components/BestItems";
import AllItems from "../_components/AllItems";

export default function ItemsPage() {
  return (
    <PageWrapper>
      <BestItems />
      <AllItems />
    </PageWrapper>
  );
}
