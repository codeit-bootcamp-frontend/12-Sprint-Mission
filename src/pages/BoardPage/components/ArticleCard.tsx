import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg"; // tsconfig.json 및 declarations.d.ts 파일 참고
import { Link } from "react-router-dom";
import { Article } from "../../../types/articleTypes";
import styled from "styled-components";

const ArticleCardContainer = styled(Link)`
  border-bottom: 1px solid #e5e7eb;
  overflow: hidden;
  cursor: pointer;
`;

const ArticleCardThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1; /* 정사각형으로 만들어 줌 */
  margin-bottom: 16px;
`;

const ArticleSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

const ArticleName = styled.h2`
  font-size: 16px;
  font-weight: 400;
  /* 모든 상품 카드가 동일한 크기일 수 있도록 상품명을 한 줄로 제한 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FavoriteCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--gray-600);
  font-size: 12px;
`;

interface ArticleCardProps {
  best: boolean;
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, best }) => {
  return (
    <ArticleCardContainer
      to={`/Articles/${article.id}`}
      className="ArticleCard"
    >
      <ArticleCardThumbnail alt={`게시글 이미지`} />
      <ArticleSummary>
        <ArticleName>{article.title}</ArticleName>
        {best ? (
          <>
            <>{article.writer.nickname}</>
            <FavoriteCount>
              <HeartIcon />
              {article.likeCount}
            </FavoriteCount>
            <>{article.createdAt}</>
          </>
        ) : (
          <>
            <>{article.createdAt}</>
            <FavoriteCount>
              <HeartIcon />
              {article.likeCount}
            </FavoriteCount>
            <>{article.writer.nickname}</>
          </>
        )}
      </ArticleSummary>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
