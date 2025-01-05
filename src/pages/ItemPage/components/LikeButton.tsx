import styled from "styled-components";
import HeartSvg from "@/assets/images/icons/ic_heart.svg?react";

interface LikeButtonProps {
  productId: string | number;
  isFavorite: boolean;
  favoriteCount: number;
}

const PillButton = styled.button`
  display: flex;
  border: 1px solid var(--secondary-200);
  padding: 0.4rem 1.2rem;
  border-radius: 3.5rem;
  align-items: center;
  gap: 1rem;

  color: var(--secondary-500);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;

  &:hover svg path {
    fill: var(--error-red);
    stroke: var(--error-red);
  }
`;

const StyledHeartSVG = styled(HeartSvg)`
  width: 3.2rem;
  height: 3.2rem;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

function LikeButton({ favoriteCount }: LikeButtonProps) {
  return (
    <PillButton>
      <ButtonContent>
        <StyledHeartSVG />
        {favoriteCount.toLocaleString()}
      </ButtonContent>
    </PillButton>
  );
}

export default LikeButton;
