import { ReactNode } from "react";
import styled from "styled-components";

const TxtSectionTitle = styled.p`
  grid-area: title;
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  line-height: 32px;
  color: var(--gray-scale-900);
`;

// 타입 설정
type SectionTitleProps = {
  children: ReactNode;
};

function SectionTitle({ children }: SectionTitleProps) {
  return <TxtSectionTitle>{children}</TxtSectionTitle>;
}

export default SectionTitle;
