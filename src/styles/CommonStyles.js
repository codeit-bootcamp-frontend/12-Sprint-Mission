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

export const LineDivider = styled.hr`
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
