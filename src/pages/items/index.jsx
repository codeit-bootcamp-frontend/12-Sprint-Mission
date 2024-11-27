import PageContainer from "@/components/PageContainer";
import BestItems from "./BestItems";
import AllItems from "./AllItems";

export default function Items() {
  return (
    <PageContainer>
      <BestItems />
      <AllItems />
    </PageContainer>
  );
}
