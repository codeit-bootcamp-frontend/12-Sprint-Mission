import styled from 'styled-components';
const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const SubmitButton = styled.button`
  border: 1px solid ${({ disabled }) => (disabled ? 'var(--gray400)' : 'var(--blue)')};
  border-radius: 8px;
  padding: 10px 20px;
  background-color: ${({ disabled }) => (disabled ? 'var(--gray400)' : 'var(--blue)')};
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-top: 30px;
`;

const RegisterTitle = ({ isValid }: { isValid: boolean }) => {
  return (
    <TitleDiv>
      <Title>상품 등록하기</Title>
      <SubmitButton disabled={!isValid}>등록</SubmitButton>
    </TitleDiv>
  );
};

export default RegisterTitle;
