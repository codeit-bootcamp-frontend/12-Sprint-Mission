import React from "react";
import styled from "styled-components";
import LoadMoreIcon from "../../assets/icons/ic-kebab.svg";
import ProfileIcon from "../../assets/icons/ic-profile.svg";
import ItemTag from "./ItemTag";
import LikeButton from "./LikeButton";
import { formatUpdatedAt } from "../../utils/dateUtils";
import { Product } from "../../types/productTypes";

const ItemSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

const ItemImage = styled.div`
  width: 343px;
  height: 343px;
  margin-top: 16px;

  img {
    border-radius: 12px;
    width: 343px;
    height: 343px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    margin-top: 24px;
  }

  @media (min-width: 1280px) {
    width: 486px;
    height: 486px;

    img {
      width: 486px;
      height: 486px;
    }
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
`;

const ItemDetails = styled.div`
  width: 100%;
  position: relative;
`;

const LoadMore = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  margin-top: 16px;
  img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

const ItemTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  margin: 16px 0 8px 0;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;

const ItemPrice = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;

const SectionDevider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0;
`;

const ItemLabel = styled.h3`
  color: var(--gray-600);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 16px;
    /* margin-bottom: ; */
  }
`;

const ItemDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 24px;
`;

const TagSection = styled.div`
  margin-top: 24px;
`;

const UserProfileWithLikes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
  position: relative;

  img {
    width: 40px;
    height: 40px;
  }
`;

const UsernameWithDate = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #4b5563;
  }

  h6 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #9ca3af;
    position: absolute;
    white-space: nowrap;
  }
`;

const LineWithLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const LineDevider = styled.hr`
  border: none;
  width: 1px;
  height: 34px;
  background-color: #e5e7eb;
`;

interface Writer {
  writer: string;
}

interface ItemDetailProps {
  product: Product;
  item: string | Writer;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, product }) => {
  const userInfo = typeof item !== "string" ? item : undefined;
  const formattedTimestamp = product?.updatedAt
    ? formatUpdatedAt(product.updatedAt)
    : "기본 시간";

  return (
    <ItemSectionContainer>
      <ItemImage>
        <img src={product.images[0]} alt={`${product.name} 상품 대표 사진`} />
      </ItemImage>

      <ItemInfo>
        <ItemDetails>
          <LoadMore>
            <img src={LoadMoreIcon} alt="더보기" />
          </LoadMore>

          <div>
            <ItemTitle>{product.name}</ItemTitle>
            <ItemPrice>{product.price.toLocaleString()}원</ItemPrice>
          </div>

          <SectionDevider />

          <div>
            <ItemLabel>상품 소개</ItemLabel>
            <ItemDescription>{product.description}</ItemDescription>
          </div>

          <TagSection>
            <ItemLabel>상품 태그</ItemLabel>
            <ItemTag tags={product.tags} />
          </TagSection>
        </ItemDetails>

        <UserProfileWithLikes>
          <UserProfile>
            <img src={ProfileIcon} alt="사용자 프로필" />
            <UsernameWithDate>
              <h4>
                {userInfo && typeof userInfo !== "string"
                  ? userInfo?.writer || "작성자"
                  : "작성자"}
              </h4>
              <h6>{formattedTimestamp}</h6>
            </UsernameWithDate>
          </UserProfile>

          <LineWithLike>
            <LineDevider />
            <LikeButton
              productId={product.id}
              isFavorite={product.isFavorite}
              favoriteCount={product.favoriteCount}
            />
          </LineWithLike>
        </UserProfileWithLikes>
      </ItemInfo>
    </ItemSectionContainer>
  );
};

export default ItemDetail;
