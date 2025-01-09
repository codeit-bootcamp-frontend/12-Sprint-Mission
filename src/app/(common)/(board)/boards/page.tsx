import { Suspense } from "react";
import { Section } from "@/components/Section";
import { Button, Message } from "@/components/ui";
import { PageWrapper } from "@/components/Page";
import BestList from "./_components/BestList";
import BoardFilter from "./_components/BoardFilter";
import BoardListAsync from "./_components/BoardListAsync";

export default function BoardsPage() {
  return (
    <PageWrapper>
      <Section>
        <Section.Header title="베스트 게시글" />
        <Section.Content>
          <Suspense fallback={<Message>베스트 게시물 가져오는중...</Message>}>
            <BestList />
          </Suspense>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header title="게시글">
          <Button href="/addBoard">글쓰기</Button>
        </Section.Header>
        <Section.Content>
          <Suspense fallback={<Message>게시물 가져오는중...</Message>}>
            <BoardFilter />
            <BoardListAsync />
          </Suspense>
        </Section.Content>
      </Section>
    </PageWrapper>
  );
}
