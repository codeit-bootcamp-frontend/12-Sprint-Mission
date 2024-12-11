import styled from "styled-components";
import heartImg from "../assets/ic_heart.svg";
import profileImg from "../assets/ic_profile.svg";
import ShowOptions from "./ShowOptions";

const ItemDetailWrap = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ItemDetailImg = styled.img`
  width: 486px;
  height: 486px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 16px;
  @media (max-width: 1199px) {
    width: 340px;
    height: 340px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const ItemDetailText = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const ItemNamePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: var(--font-weight-semibold);
`;

const ItemName = styled.p`
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 24px;
`;

const ItemPrice = styled.p`
  font-size: 40px;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: var(--gray-scale-200);
  border: none;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  line-height: 26px;
  color: var(--gray-scale-600);
`;

const ItemTagsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
`;

const ItemSubject = styled.p`
  font-weight: var(--font-weight-semibold);
  color: var(--gray-scale-600);
`;

const ItemTags = styled.div``;

const ItemTag = styled.span`
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 6px 16px;
  border-radius: 26px;
  background-color: var(--gray-scale-100);
  font-weight: var(--font-weight-regular);
  color: var(--gray-scale-800);
`;

const ItemWriterFavorite = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: 38px;
`;

const ItemWriter = styled.li`
  display: flex;
  gap: 16px;
  font-size: 14px;
`;

const ItemWriterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

const WriterId = styled.p`
  font-weight: var(--font-weight-medium);
  color: var(--gray-scale-600);
`;

const WriteDate = styled.p`
  font-weight: var(--font-weight-regular);
  color: var(--gray-scale-400);
`;

const ItemFavorite = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 12px;
  border: 1px solid var(--gray-scale-200);
  border-radius: 35px;
  color: var(--gray-scale-500);
  font-size: 16px;
  font-weight: var(--font-weight-medium);
`;

function ItemDetail({ item = { item }, formatDate, tags }) {
  return (
    <ItemDetailWrap>
      <ItemDetailImg src={item.images} alt="상품이미지" />
      <ItemDetailText>
        <ItemNamePrice>
          <ItemName>
            {item.name}
            <ShowOptions />
          </ItemName>
          <ItemPrice>{item.price}</ItemPrice>
          <Line />
        </ItemNamePrice>
        <ItemDescription>
          <ItemSubject>상품 소개</ItemSubject>
          <p>{item.description}</p>
        </ItemDescription>
        <ItemTagsWrap>
          <ItemSubject>상품 태그</ItemSubject>
          <ItemTags>
            {tags.map((tag, index) => {
              return <ItemTag key={index}>#{tag}</ItemTag>;
            })}
          </ItemTags>
        </ItemTagsWrap>
        <ItemWriterFavorite>
          <ItemWriter>
            <img src={profileImg} alt="사용자 프로필 사진" />
            <ItemWriterText>
              <WriterId>{item.ownerId}</WriterId>
              <WriteDate>{formatDate(item.createdAt)}</WriteDate>
            </ItemWriterText>
          </ItemWriter>
          <ItemFavorite>
            <img src={heartImg} alt="좋아요 아이콘" />
            <span>{item.favoriteCount}</span>
          </ItemFavorite>
        </ItemWriterFavorite>
      </ItemDetailText>
    </ItemDetailWrap>
  );
}

export default ItemDetail;
