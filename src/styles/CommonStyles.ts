import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  /* 참고: 최상단 wrapper div를 flexbox로 만들어줬어요 */
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 16px 24px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 1200px;
    padding: 24px 0;
    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[800]};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 28px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 11.5px 23px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.hover};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.blue.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    cursor: default;
    pointer-events: none;
  }
`;

interface StyledProps {
  $pill?: boolean; // $pill 속성을 optional로 정의
}

export const StyledLink = styled(Link)<StyledProps>`
  background-color: ${({ theme }) => theme.colors.blue.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 11.5px 23px;
  border-radius: ${(props) => (props.$pill ? "999px" : "8px")};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.hover};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.blue.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    cursor: default;
    pointer-events: none;
  }
`;

interface LineDividerProps {
  $margin?: string; // $margin을 optional prop으로 정의
}

export const LineDivider = styled.hr<LineDividerProps>`
  width: 100%;
  border: none;
  height: 1px;
  background-color: var(--gray-200);
  margin: ${(props) =>
    props.$margin || "16px 0"}; // margin을 optional prop으로 받기
`;
