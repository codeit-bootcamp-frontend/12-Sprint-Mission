import { useEffect, useState } from "react";
import { getProductComments } from "../../../api/itemApi";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { ReactComponent as EmptyCommentImage } from "../../../assets/images/image/img_empty_comment.svg";

const EmptyCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.4rem;
  margin: 3rem 0 4.8rem;
`;

const EmptyCommentText = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--secondary-400);
`;

const CommentListContainer = styled.div`
  margin-bottom: 6.4rem;

  @media (max-width: 1199px) {
    margin-bottom: 5.6rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 4rem;
  }
`;

function CommentList({ productId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!productId) {
      console.error("productId가 유효하지 않습니다.");
      return;
    }

    const fetchComments = async () => {
      const params = {
        limit: 10,
      };

      try {
        const data = await getProductComments({ productId, params });
        setComments(data.list);
      } catch (error) {
        console.error("Error fetching item details: ", error);
      }
    };

    fetchComments();
  }, [productId]);

  if (comments && !comments.length) {
    return (
      <EmptyCommentContainer>
        <EmptyCommentImage />
        <EmptyCommentText>아직 문의가 없어요</EmptyCommentText>
      </EmptyCommentContainer>
    );
  } else {
    return (
      <CommentListContainer>
        {comments.map((item) => (
          <CommentItem item={item} key={`comment-${item.id}`} />
        ))}
      </CommentListContainer>
    );
  }
}

export default CommentList;
