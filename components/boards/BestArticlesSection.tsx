import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  FlexRowCentered,
  SectionHeader,
  SectionTitle,
} from "@/styles/CommonStyles";
import { Article, ArticleListResponse } from "@/types/articleTypes";
import {
  ArticleInfo,
  ArticleInfoDiv,
  ArticleThumbnail,
  ArticleTitle,
  ImageWrapper,
  MainContent,
  Timestamp,
} from "@/styles/BoardsStyles";
import MedalIcon from "@/public/images/icons/ic_medal.svg";
import useViewport from "@/hooks/useViewport";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";

const CardContainer = styled(Link)`
  background-color: var(--gray-50);
  border-radius: 8px;
`;

const ContentWrapper = styled.div`
  padding: 16px 24px;
`;

const BestSticker = styled(FlexRowCentered)`
  background-color: var(--blue);
  border-radius: 0 0 32px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  gap: 4px;
  padding: 6px 24px 8px 24px;
  margin-left: 24px;
  display: inline-flex;
`;

const BestArticleCard = ({ article }: { article: Article }) => {
  const dateString = format(article.createdAt, "yyyy. MM. dd");

  return (
    <CardContainer href={`/boards/${article.id}`}>
      <BestSticker>
        <MedalIcon alt="베스트 게시글" />
        Best
      </BestSticker>

      <ContentWrapper>
        <MainContent>
          <ArticleTitle>{article.title}</ArticleTitle>
          {article.image && (
            <ArticleThumbnail>
              {/* Next Image의 width, height을 설정해줄 것이 아니라면 부모 div 내에서 fill, objectFit 설정으로 비율 유지하면서 유연하게 크기 조정 */}
              {/* 프로젝트 내에 있는 이미지 파일을 사용하는 게 아니라면 next.config.mjs에 이미지 주소 설정 필요 */}
              <ImageWrapper>
                <Image
                  fill
                  src={article.image}
                  alt={`${article.id}번 게시글 이미지`}
                  style={{ objectFit: "contain" }}
                />
              </ImageWrapper>
            </ArticleThumbnail>
          )}
        </MainContent>

        <ArticleInfo>
          <ArticleInfoDiv>
            {article.writer.nickname}
            <LikeCountDisplay count={article.likeCount} fontSize={14} />
          </ArticleInfoDiv>
          <Timestamp>{dateString}</Timestamp>
        </ArticleInfo>
      </ContentWrapper>
    </CardContainer>
  );
};

const BestArticlesCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const getPageSize = (width: number): number => {
  if (width < 768) {
    return 1; // Mobile viewport
  } else if (width < 1280) {
    return 2; // Tablet viewport
  } else {
    return 3; // Desktop viewport
  }
};

const BestArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null); // 초기 값을 실제 사용되는 값인 1 또는 3으로 설정해도 되지만, 이 경우에는 화면 크기가 파악되기 전에는 pageSize가 설정되지 않았음을 명확히 하기 위해 null로 두었어요.

  // Server-side rendering을 기본으로 하는 Next.js에서는 일반 리액트에서처럼 바로 window 객체를 사용하지 못하기 때문에, 별도의 useViewport 커스텀 훅을 만들었어요.
  const viewportWidth = useViewport();

  // 베스트 게시글 섹션의 요구사항에 따르면, 화면 크기에 따라 몇 개의 데이터를 보여줄지 여부(pageSize)를 결정하고 해당 값을 query parameter로 넣어 데이터를 호출해야 해요.
  // 화면 크기가 파악된 후에 처리해야 하는 방식이기 때문에 client-side에서 호출해야 하고, 따라서 server-side에서 미리 내용을 받아오는 Next.js의 prefetching 기능을 사용할 수 없어요.
  // (참고: 요구사항을 유연하게 해석한다면, pageSize을 필요한 데이터 길이의 최대값인 3으로 두어 prefetching한 후에 client-side에서 화면 크기에 따라 데이터 배열을 절삭해 사용하는 방법도 있어요.)
  useEffect(() => {
    // 화면 크기가 파악되기 전까지 pageSize 계산이나 데이터를 호출하지 않도록 처리
    if (viewportWidth === 0) return;

    // 화면 크기가 바뀔 때마다 불필요하게 데이터를 호출하는 것을 막기 위해, 화면 크기에 따른 pageSize 범위가 바뀔 때만 호출하도록 처리
    const newPageSize = getPageSize(viewportWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const fetchBestArticles = async (size: number) => {
        try {
          const response = await fetch(
            `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
          );
          const data: ArticleListResponse = await response.json();
          setArticles(data.list);
        } catch (error) {
          console.error("Failed to fetch best articles:", error);
        }
      };

      fetchBestArticles(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  return (
    <div>
      <SectionHeader>
        <SectionTitle>베스트 게시글</SectionTitle>
      </SectionHeader>

      <BestArticlesCardSection>
        {articles.map((article) => (
          <BestArticleCard
            key={`best-article-${article.id}`}
            article={article}
          />
        ))}
      </BestArticlesCardSection>
    </div>
  );
};

export default BestArticlesSection;
