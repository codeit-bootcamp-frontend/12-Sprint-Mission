import { PageWrapper } from "@/components/Page";
import BestItems from "./_components/BestItems";
import AllItems from "./_components/AllItems";
import { Suspense } from "react";

export default function ItemsPage() {
  return (
    <PageWrapper>
      <BestItems />
      <Suspense>
        <AllItems />
      </Suspense>
    </PageWrapper>
  );
}
