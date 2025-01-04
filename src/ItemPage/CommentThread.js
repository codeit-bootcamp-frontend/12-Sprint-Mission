import { useEffect, useState } from "react";
import { getProductComments } from "../API";
import styled from "styled-components";
import EmptyIcon from "../assets/empty-comment.png";
import DefaultProfileImage from "../assets/profile-icon.svg";
import { formatUpdatedAt } from "../utils/dateUtils";
import ActionMenu from "./ActionMenu";

const CommentContainer = styled.div`
  padding: 24px 0;
  position: relative;

  &:first-child {
    margin-top: 16px;
  }
`;

const LoadMoreButton = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const CommentContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  color: #1f2937;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Username = styled.p`
  color: #4b5563;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;
`;

const Timestamp = styled.p`
  color: #9ca3af;
  font-size: 12px;
  font-weight: 400;
`;

const LineDivider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: var(--gray-200);
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 40px 0 48px 0;

  img {
    width: 140px;
    height: auto;
    margin: 0 auto;
  }

  p {
    font-size: 16 px;
    font-weight: 400;
    text-align: center;
    color: #9ca3af;
  }
`;

const CommentItem = ({ item }) => {
  const userInfo = item.writer;
  const formattedTimestamp = formatUpdatedAt(item.updatedAt);

  return (
    <>
      <CommentContainer>
        <LoadMoreButton>
          <ActionMenu />
        </LoadMoreButton>

        <CommentContent>{item.content}</CommentContent>

        <UserProfile>
          <UserProfileImage
            src={userInfo.image || DefaultProfileImage}
            alt={`${userInfo.nickname}님의 프로필 사진`}
          />

          <div>
            <Username>{userInfo.nickname}</Username>
            <Timestamp>{formattedTimestamp}</Timestamp>
          </div>
        </UserProfile>
      </CommentContainer>

      <LineDivider />
    </>
  );
};

const EmptyComment = () => {
  return (
    <EmptyContainer>
      <img src={EmptyIcon} alt="문의 없음" />
      <p>아직 문의가 없어요</p>
    </EmptyContainer>
  );
};

const ThreadContainer = styled.div`
  margin-bottom: 40px;
`;

function CommentThread({ productId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const fetchComments = async () => {
      setIsLoading(true);
      const params = {
        limit: 10,
      };

      try {
        const data = await getProductComments({ productId, params });
        setComments(data.list);
        setError(null);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("상품의 댓글을 불러오지 못했어요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [productId]);

  if (isLoading) {
    return <div>상품 댓글 로딩중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (comments && !comments.length) {
    return <EmptyComment />;
  } else {
    return (
      <ThreadContainer>
        {comments.map((item) => (
          <CommentItem item={item} key={`comment-${item.id}`} />
        ))}
      </ThreadContainer>
    );
  }
}

export default CommentThread;
