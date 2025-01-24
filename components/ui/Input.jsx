import styled from "styled-components";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Input = styled.input`
  flex-grow: 1; /* 남은 공간을 모두 차지 */
  max-width: 1050px;
  height: 42px;
  border: none;
  border-radius: 12px;
  color: var(--gray-400);
  background-color: var(--gray-100);
  padding: 12px 16px;
  margin: 24px auto;

  &::placeholder {
    color: var(--gray-500);
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
  }
`;

export default Input;
