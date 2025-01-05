import styled from "styled-components";

export const Container = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  padding-top: 2.4rem;

  @media (max-width: 1199px) {
    padding: 0 3rem;
    padding-top: 2.4rem;
  }

  @media (max-width: 767px) {
    padding: 0 1.5rem;
    padding-top: 1.6rem;
  }
`;

export const Button = styled.button`
  background-color: var(--primary-100);
  color: var(--secondary-100);
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-200);
  }

  &:focus {
    background-color: var(--primary-300);
  }

  &:disabled {
    background-color: var(--secondary-400);
    cursor: default;
    pointer-events: none;
  }
`;

export const PillButton = styled.button`
  padding: 1.2rem 12.4rem;
  border-radius: 999px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3.2rem;
`;

export const LineDivider = styled.hr<{
  $margin?: string;
  $tabletMargin?: string;
  $mobileMargin?: string;
}>`
  width: 100%;
  border: none;
  height: 1px;
  background-color: var(--secondary-200);
  margin: ${(props) => props.$margin || "1.6rem 0 2.4rem"};

  @media (max-width: 1199px) {
    margin: ${(props) =>
      props.$tabletMargin || props.$margin || "3.2rem 0 4rem"};
  }

  @media (max-width: 767px) {
    margin: ${(props) =>
      props.$mobileMargin ||
      props.$tabletMargin ||
      props.$margin ||
      "2.4rem 0 2.4rem"};
  }
`;
