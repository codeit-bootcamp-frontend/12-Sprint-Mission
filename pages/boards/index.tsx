import React from "react";
import styled from "styled-components";
import { Container } from "@/styles/CommonStyles";
import BestArticlesSection from "../../components/boards/BestArticlesSection";
import AllArticlesSection from "../../components/boards/AllArticlesSection";
import { GetStaticProps } from "next";
import { Article, ArticleListResponse } from "@/types/articleTypes";

// 참고: Next.js에서는 pages 내의 모든 파일을 라우팅 가능한 페이지로 보기 때문에 실제 페이지 컴포넌트를 제외한 components, styles 등의 폴더 또는 파일은 pages 밖의 디렉토리에 추가해 주세요.
//      - 개발 모드에서는 정상적으로 동작했지만 빌드에 실패했다면 이 이슈일 가능성이 있어요.

const PageContainer = styled(Container)`
  gap: 40px;
`;

// 데이터 prefetching은 페이지 로딩 전에 필요한 데이터를 미리 가져오는 과정이기 때문에 페이지 수준에서 수행한 후에 해당 데이터를 필요로 하는 컴포넌트에 prop으로 전달
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?orderBy=recent`
  );
  const data: ArticleListResponse = await response.json();

  return {
    props: {
      initialArticles: data.list,
    },
  };
};

interface BoardsPageProps {
  initialArticles: Article[];
}

export default function BoardsPage({ initialArticles }: BoardsPageProps) {
  return (
    <PageContainer>
      <BestArticlesSection />
      <AllArticlesSection initialArticles={initialArticles} />
    </PageContainer>
  );
}
