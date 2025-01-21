import styled from "styled-components";

const CommentLabel = styled.label`
  font-size: 16px;
  color: var(--gray-scale-900);
  font-weight: var(--font-weight-semibold);
`;
const CommentInput = styled.textarea`
  width: 100%;
  height: 104px;
  margin: 9px auto 16px;
  padding: 16px 24px;
  background-color: var(--gray-scale-100);
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 26px;
  &::placeholder {
    color: var(--gray-scale-400);
  }
  @media (max-width: 767px) {
    height: 130px;
  }
`;
const CommentSubmitButton = styled.button`
  float: right;
  padding: 12px 23px;
  background-color: var(--primary-color-100);
  border-radius: 8px;
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--gray-scale-0);
  &:hover {
    background-color: var(--primary-color-200);
  }
  &:active {
    background-color: var(--primary-color-300);
  }
  &:disabled {
    background-color: var(--gray-scale-400);
  }
  cursor: pointer;
`;

// 타입 설정
interface CommentFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid: (value: string) => boolean;
}

function CommentForm({
  handleSubmit,
  value,
  setValue,
  isValid,
}: CommentFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <CommentLabel htmlFor="questionSubmit">문의하기</CommentLabel>
      <CommentInput
        name="questionSubmit"
        id="questionSubmit"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <CommentSubmitButton type="submit" disabled={!isValid(value)}>
        등록
      </CommentSubmitButton>
    </form>
  );
}

export default CommentForm;
