import { useState } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import { Button } from "../../../styles/CommonStyles";

const commentPlaceholder =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentInputSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--secondary-900);
`;

const TextArea = styled.textarea`
  background-color: var(--secondary-100);
  border: none;
  border-radius: 1.2rem;
  padding: 1.6rem 2.4rem;
  height: 10.4rem;
  margin: 0.9rem 0 1.6rem;
  resize: none;
  color: var(--secondary-900);
  font-size: 1.6rem;
  line-height: 2.6rem;

  @media (max-width: 767px) {
    height: 12.9rem;
    margin: 1.6rem 0 1.6rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  &::placeholder {
    color: var(--secondary-400);
    font-size: 1.6rem;
    line-height: 2.6rem;

    @media (max-width: 767px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }

  &:focus {
    outline-color: var(--primary-100);
  }
`;

const PostCommentButton = styled(Button)`
  border-radius: 0.8rem;
  padding: 1.2rem 2.3rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.6rem;
  align-self: flex-end;
`;

function ItemCommentsSection({ productId }) {
  const [comment, setComment] = useState("");

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <CommentInputSection>
        <SectionTitle>문의하기</SectionTitle>
        <TextArea
          placeholder={commentPlaceholder}
          value={comment}
          onChange={handleInputChange}
        />
        <PostCommentButton disabled={!comment.trim()}>등록</PostCommentButton>
      </CommentInputSection>

      <CommentList productId={productId} />
    </>
  );
}

export default ItemCommentsSection;
