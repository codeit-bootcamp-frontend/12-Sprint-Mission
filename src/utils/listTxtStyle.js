import styled from "styled-components";

export const ListWrapUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 40px 16px;
  flex-wrap: wrap;
  margin-top: 24px;
  @media (max-width: 1199px) {
    gap: 40px 2%;
  }
  @media (max-width: 767px) {
    gap: 32px 0;
  }
`;

export const ItemTxtWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
  color: var(--gray-scale-800);
`;

export const ItemTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: var(--font-weight-medium);
`;

export const ItemPrice = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: var(--font-weight-bold);
`;

export const FavoriteWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FavoriteImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const FavoriteCount = styled.span`
  font-size: 12px;
  line-height: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--gray-scale-600);
`;
