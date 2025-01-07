import React from "react";
import styled from "styled-components";
import LikeCount from "../../assets/icons/ic-heart.svg";

const PillButton = styled.button`
  color: var(--gray-500);
  background-color: #fff;
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--gray-200);

  &:hover {
    fill: var(--blue);
    stroke: var(--blue);
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

interface LikeButtonProps {
  productId: number;
  isFavorite: boolean;
  favoriteCount: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  productId,
  isFavorite,
  favoriteCount,
}) => {
  return (
    <>
      <PillButton>
        <Button>
          <img
            src={LikeCount}
            alt="좋아요"
            // fillColor={isFavorite && "var(--blue)"}
          />
          {favoriteCount.toLocaleString()}
        </Button>
      </PillButton>
    </>
  );
};

export default LikeButton;
