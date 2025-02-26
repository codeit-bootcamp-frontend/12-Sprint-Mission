import { PageWrapper } from "@/components/Page";
import { Section } from "@/components/Section";
import BestList from "./_components/BestList";
import { Button } from "@/components/ui";
import BoardFilter from "./_components/BoardFilter";
import BoardList from "./_components/BoardList";

export default function BoardsPage() {
  return (
    <PageWrapper>
      <Section>
        <Section.Header title="베스트 상품" />
        <Section.Content>
          <BestList />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header title="게시글">
          <Button href="/addBoard" size="sm">
            글쓰기
          </Button>
        </Section.Header>
        <Section.Content>
          <BoardFilter />
          <BoardList />
        </Section.Content>
      </Section>
    </PageWrapper>
  );
}
