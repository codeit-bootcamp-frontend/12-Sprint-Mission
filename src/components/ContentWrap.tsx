import { ReactNode } from "react";
import styled from "styled-components";

const ContentSectionWrap = styled.section`
  margin: 94px auto 58px;
  max-width: 1200px;
  @media (max-width: 1199px) {
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

// 타입 설정
type ContentWrapProps = {
  children: ReactNode;
};

function ContentWrap({ children }: ContentWrapProps) {
  return <ContentSectionWrap>{children}</ContentSectionWrap>;
}

export default ContentWrap;
