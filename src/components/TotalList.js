import "./TotalList.css";
import styled from "styled-components";
import {
  ListWrapUl,
  ItemTxtWrap,
  ItemTitle,
  ItemPrice,
  FavoriteWrap,
  FavoriteImg,
  FavoriteCount,
} from "../utils/listTxtStyle";
import heartImg from "../assets/ic_heart.svg";

const TotalListLi = styled.li`
  width: 221px;
  @media (max-width: 1199px) {
    width: 32%;
  }
  @media (max-width: 768px) {
    width: 49%;
  }
`;

const TotalListImg = styled.img`
  display: inline-block;
  height: 221px;
  width: 221px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 1199px) {
    width: 100%;
    height: auto;
  }
`;

function TotalListItem({ item }) {
  return (
    <>
      <TotalListImg src={item.images} alt="상품이미지" />
      <ItemTxtWrap>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemPrice>{item.price}원</ItemPrice>
        <FavoriteWrap>
          <FavoriteImg src={heartImg} alt="찜 아이콘" />
          <FavoriteCount>{item.favoriteCount}</FavoriteCount>
        </FavoriteWrap>
      </ItemTxtWrap>
    </>
  );
}

function TotalList({ fullItems }) {
  return (
    <ListWrapUl>
      {fullItems.map((fullItem) => {
        return (
          <TotalListLi key={fullItem.id}>
            <TotalListItem item={fullItem} />
          </TotalListLi>
        );
      })}
    </ListWrapUl>
  );
}

export default TotalList;
