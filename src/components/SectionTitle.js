import styled from "styled-components";

const TxtSectionTitle = styled.p`
  grid-area: title;
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  line-height: 32px;
  color: var(--gray-scale-900);
`;

function SectionTitle({ children }) {
  return <TxtSectionTitle>{children}</TxtSectionTitle>;
}

export default SectionTitle;
