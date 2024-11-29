import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 70px auto 0;
  width: 90%;
  max-width: 1200px;
  @media (max-width: 500px) {
    margin-top: 130px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid var(--gray100);
  border-radius: 12px;
  padding-left: 16px;
  background-color: var(--gray100);
  height: 56px;
  font-size: 16px;

  font-family: Pretendard, sans-serif;
  &::placeholder {
    color: var(--gray400);
  }
`;

const Textarea = styled.textarea`
  border: 1px solid var(--gray100);
  border-radius: 12px;
  padding: 16px 0 0 16px;
  height: 300px;
  background-color: var(--gray100);
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  resize: none;
  &::placeholder {
    color: var(--gray400);
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray100);
  border-radius: 12px;
  width: 280px;
  height: 280px;
  background-color: var(--gray100);
  color: var(--gray400);
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

const SubmitButton = styled.button`
  border: 1px solid
    ${({ disabled }) => (disabled ? 'var(--gray400)' : 'var(--blue)')};
  border-radius: 8px;
  padding: 10px 20px;
  background-color: ${({ disabled }) =>
    disabled ? 'var(--gray400)' : 'var(--blue)'};
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

const RegisterForm = () => {
  const isValid = true;
  return (
    <Form>
      <TitleDiv>
        <Title>상품 등록하기</Title>
        <SubmitButton disabled={isValid}>등록</SubmitButton>
      </TitleDiv>

      <Label>상품 이미지</Label>

      <FileButton htmlFor="file">이미지 등록</FileButton>
      <FileInput id="file" type="file" />

      <Label htmlFor="item-name">상품명</Label>
      <Input
        id="item-name"
        name="item-name"
        type="text"
        placeholder="상품명을 입력해주세요"
      />

      <Label htmlFor="item-explain">상품 소개</Label>
      <Textarea
        id="item-explain"
        name="item-explain"
        placeholder="상품 소개를 입력해주세요"
      />

      <Label htmlFor="item-price">판매 가격</Label>
      <Input
        id="item-price"
        name="item-price"
        type="number"
        placeholder="판매 가격을 입력해주세요"
      />

      <Label htmlFor="tag">태그</Label>
      <Input
        id="tag"
        name="tag"
        type="text"
        placeholder="태그를 입력해주세요"
      />
    </Form>
  );
};

export default RegisterForm;
