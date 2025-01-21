import styled, { css } from "styled-components";

const CommonListWrapUl = css`
  display: flex;
  gap: 40px 16px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const ListWrapUl = styled.ul`
  ${CommonListWrapUl}
  @media (max-width: 1199px) {
    gap: 40px 2%;
  }
  @media (max-width: 767px) {
    justify-content: space-between;
    gap: 32px 0;
  }

  a {
    width: 221px;
    @media (max-width: 1199px) {
      width: 32%;
    }
    @media (max-width: 768px) {
      width: 49%;
    }
  }
`;

export const BestListWrapUl = styled.ul`
  ${CommonListWrapUl}
  @media (max-width: 1199px) {
    gap: 0;
  }

  a {
    display: inline-block;
    //width: 221px;
    @media (max-width: 1199px) {
      width: 49%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
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
