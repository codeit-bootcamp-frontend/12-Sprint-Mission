import { useState } from "react";
import styled from "styled-components";
import CommentThread from "./CommentThread";

const COMMENT_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  margin-top: 24px;
`;

const CommentTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
`;

const TextArea = styled.textarea`
  background-color: #f3f4f6;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  height: 129px;
  resize: none;

  &:focus {
    outline-color: var(--blue);
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
    line-height: 24px;
  }
`;

const PostButton = styled.button`
  align-self: flex-end;
  background-color: var(--blue);
  color: #fff;
  width: 74px;
  height: 42px;
  padding: 8px 23px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: #9ca3af;
    cursor: default;
  }
`;

function ItemComment({ productId }) {
  const [comment, setComment] = useState("");

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handlePost = () => {};

  return (
    <>
      <CommentInput>
        <CommentTitle>문의하기</CommentTitle>

        <TextArea
          placeholder={COMMENT_PLACEHOLDER}
          value={comment}
          onChange={handleInputChange}
        />

        <PostButton onClick={handlePost} disabled={!comment.trim()}>
          등록
        </PostButton>
      </CommentInput>

      <CommentThread productId={productId} />
    </>
  );
}

export default ItemComment;
