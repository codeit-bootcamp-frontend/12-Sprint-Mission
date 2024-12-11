import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BestListWrapUl,
  ItemTxtWrap,
  ItemTitle,
  ItemPrice,
  FavoriteWrap,
  FavoriteImg,
  FavoriteCount,
} from "../utils/listTxtStyle";
import heartImg from "../assets/ic_heart.svg";
import SectionTitle from "./SectionTitle";

const BestListWrap = styled.article`
  margin-bottom: 40px;
`;

const BestListLi = styled.li``;

const BestListImg = styled.img`
  border-radius: 16px;
  width: 282px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  @media (max-width: 1199px) {
    width: 100%;
  }
`;

function BestListItem({ item }) {
  return (
    <>
      <BestListImg src={item.images} alt="상품이미지" />
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

function BestList({ items }) {
  return (
    <BestListWrap>
      <SectionTitle>베스트 상품</SectionTitle>
      <BestListWrapUl>
        {items.map((item) => {
          return (
            <Link to={`/items/${item.id}`}>
              <BestListLi key={item.id}>
                <BestListItem item={item} />
              </BestListLi>
            </Link>
          );
        })}
      </BestListWrapUl>
    </BestListWrap>
  );
}

export default BestList;
