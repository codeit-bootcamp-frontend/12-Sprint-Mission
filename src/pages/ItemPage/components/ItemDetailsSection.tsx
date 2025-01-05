import styled from "styled-components";
import { LineDivider } from "@/styles/CommonStyles";
import TagDisplay from "@/pages/ItemPage/components/TagDisplay";
import LikeButton from "@/pages/ItemPage/components/LikeButton";
import KebabIcon from "@/assets/images/icons/ic_kebab.svg?react";
import defaultImage from "@/assets/images/image/img_default.png";
import SellerImage from "@/assets/images/icons/ic_profile.svg?react";

interface Item {
  id: string;
  name: string;
  price: number;
  createdAt: string;
  description: string;
  tags: string[];
  ownerNickname: string;
  images: string[];
  isFavorite: boolean;
  favoriteCount: number;
}

interface ItemDetailsSectionProps {
  item: Item;
}

const SectionContainer = styled.section`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 1199px) {
    gap: 1.6rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
`;

const ItemImage = styled.img`
  width: 48.6rem;
  height: 100%;
  border-radius: 1.6rem;

  @media (max-width: 1199px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const MainDetails = styled.div`
  width: 100%;
  position: relative;
`;

const KebabButton = styled.button`
  position: absolute;
  right: 0;
`;

const ItemTitle = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: var(--secondary-800);

  @media (max-width: 1199px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

const ItemPrice = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.8rem;
  color: var(--secondary-800);
  margin: 1.6rem 0;

  @media (max-width: 1199px) {
    font-size: 3.2rem;
    line-height: 4.2rem;
  }

  @media (max-width: 767px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

const SectionLabel = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--secondary-600);
  margin: 2.4rem 0 1.6rem;

  @media (max-width: 1199px) {
    margin: 1.6rem 0 0.8rem;
  }
`;

const ItemDescription = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--color-black);
`;

const SellerInfoSection = styled.div`
  width: 100%;
  margin: 6.2rem 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1199px) {
    margin: 4rem 0 3.2rem;
  }

  @media (max-width: 767px) {
    margin: 4rem 0 2.4rem;
  }
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex-grow: 1;
  margin-left: 1.6rem;
  margin-right: 2.4rem;
  border-right: 1px solid var(--secondary-200);
`;

const StyledSellerImage = styled(SellerImage)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SellerName = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-black);
`;

const ItemDate = styled.div`
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--secondary-400);
`;

function ItemDetailsSection({ item }: ItemDetailsSectionProps) {
  const createdDate = new Date(item.createdAt);
  const formattedDate = `${createdDate.getFullYear()}. ${(
    createdDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}. ${createdDate.getDate().toString().padStart(2, "0")}`;

  return (
    <SectionContainer>
      <ItemImage
        src={
          item.images && item.images.length > 0 ? item.images[0] : defaultImage
        }
        alt={item.name}
        onError={(e) => ((e.target as HTMLImageElement).src = defaultImage)}
      />

      <ItemDetailsContainer>
        <MainDetails>
          <KebabButton>
            <KebabIcon />
          </KebabButton>

          <ItemTitle>{item.name}</ItemTitle>
          <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>

          <LineDivider />

          <SectionLabel>상품 소개</SectionLabel>
          <ItemDescription>{item.description}</ItemDescription>

          <SectionLabel>상품 태그</SectionLabel>
          <TagDisplay tags={item.tags} />
        </MainDetails>

        <SellerInfoSection>
          <StyledSellerImage />

          <PostInfoWrapper>
            <SellerName>{item.ownerNickname}</SellerName>
            <ItemDate>{formattedDate}</ItemDate>
          </PostInfoWrapper>

          <LikeButton
            productId={item.id}
            isFavorite={item.isFavorite}
            favoriteCount={item.favoriteCount}
          />
        </SellerInfoSection>
      </ItemDetailsContainer>
    </SectionContainer>
  );
}

export default ItemDetailsSection;
