import styled from "styled-components";

export const SelectBox = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  border: 1px solid var(--gray-300);
  border-radius: 10px;
  z-index: 1;
  background: var(--white);
`;

export const SelectButton = styled.div`
  padding: 15px 40px;
  color: var(--gray-500);
  font-size: 1.6em;
  cursor: pointer;

  &:first-child {
    border-bottom: 1px solid var(--gray-300);
  }
`;
