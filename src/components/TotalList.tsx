import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Item } from "../api/api";
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
import defaultImg from "../assets/img_default.svg";

const TotalListLi = styled.li``;
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

// 타입 설정
type TotalListProps = {
  items: Item[];
  page: number;
  pageSize: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
};
type TotalListItemProps = {
  item: Item;
};

function TotalListItem({ item }: TotalListItemProps) {
  return (
    <>
      <TotalListImg
        src={
          item.images && item.images.length > 0 ? item.images[0] : defaultImg
        }
        alt="상품이미지"
      />
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

function TotalList({
  items,
  page,
  pageSize,
  setPage,
  totalCount,
}: TotalListProps) {
  return (
    <ListWrapUl>
      {items.map((item) => {
        return (
          <Link to={`/items/${item.id}`}>
            <TotalListLi key={item.id}>
              <TotalListItem item={item} />
            </TotalListLi>
          </Link>
        );
      })}
    </ListWrapUl>
  );
}

export default TotalList;
