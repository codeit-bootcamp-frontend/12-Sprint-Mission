import { PageWrapper } from "@/components/Page";
import BestItems from "../_components/BestItems";
import AllItems from "../_components/AllItems";
import { Suspense } from "react";
import { Message } from "@/components/ui";

export default function ItemsPage() {
  return (
    <PageWrapper>
      <Suspense fallback={<Message>베스트 상품을 불러오는중입니다...</Message>}>
        <BestItems />
      </Suspense>
      <Suspense fallback={<Message>전체 상품을 불러오는중입니다....</Message>}>
        <AllItems />
      </Suspense>
    </PageWrapper>
  );
}
