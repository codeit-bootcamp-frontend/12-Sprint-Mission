import { Suspense } from "react";
import { PageWrapper } from "@/components/Page";
import { Section } from "@/components/Section";
import { Button, Loading } from "@/components/ui";
import BestList from "@/components/board/BestList";
import BoardFilter from "@/components/board/BoardFilter";
import BoardList from "@/components/board/BoardList";

export default function BoardsPage() {
  return (
    <PageWrapper>
      <Section>
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <Suspense fallback={<Loading>loading...</Loading>}>
            <BestList />
          </Suspense>
        </Section.Content>
      </Section>
      <Section>
        <Suspense fallback={<Loading>loading...</Loading>}>
          <Section.Header title="게시글">
            <Button href="/addBoard" size="sm">
              글쓰기
            </Button>
          </Section.Header>
          <Section.Content>
            <BoardFilter />
            <BoardList />
          </Section.Content>
        </Suspense>
      </Section>
    </PageWrapper>
  );
}
