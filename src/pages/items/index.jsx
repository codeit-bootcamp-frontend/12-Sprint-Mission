import PageContainer from "@/components/PageContainer";
import BestItems from "./components/BestItems";
import AllItems from "./components/AllItems";

export default function Items() {
  return (
    <PageContainer>
      <BestItems />
      <AllItems />
    </PageContainer>
  );
}
