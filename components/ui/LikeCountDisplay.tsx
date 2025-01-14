import React from "react";
import styled from "styled-components";
import HeartIcon from "@/public/images/icons/ic_heart.svg";
import { FlexRowCentered } from "@/styles/CommonStyles";

const LikeCountWrapper = styled(FlexRowCentered)<{
  $fontSize: number;
  $gap: number;
}>`
  color: var(--gray-500);
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  gap: ${({ $gap }) => `${$gap}px`};
`;

interface LikeCountDisplayProps {
  count: number;
  iconWidth?: number;
  fontSize?: number;
  gap?: number;
  className?: string;
}

const LikeCountDisplay: React.FC<LikeCountDisplayProps> = ({
  count,
  iconWidth = 16,
  fontSize = 16,
  gap = 4,
  className,
}) => {
  // 1만 이상 되는 숫자는 '9999+'로 표기
  const displayCount = count >= 10000 ? "9999+" : count.toString();

  // className을 넣어주면 다음과 같이 컴포넌트를 연장해 styled-components에 넣어주는 스타일을 적용할 수 있어요.
  //    예: const StyledAllArticleLikeCountDisplay = styled(LikeCountDisplay)``
  //       <StyledAllArticleLikeCountDisplay count={article.likeCount} />
  // 하지만 주요 스타일링은 이 컴포넌트에서처럼 optional props + default value를 통해 적용하는 것을 추천해요.

  return (
    <LikeCountWrapper className={className} $fontSize={fontSize} $gap={gap}>
      <HeartIcon width={iconWidth} alt="좋아요 아이콘" />
      {displayCount}
    </LikeCountWrapper>
  );
};

export default LikeCountDisplay;
