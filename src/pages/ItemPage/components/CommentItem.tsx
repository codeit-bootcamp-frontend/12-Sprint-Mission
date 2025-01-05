import styled from "styled-components";
import KebabIcon from "@/assets/images/icons/ic_kebab.svg?react";
import DefaultProfileImage from "@/assets/images/icons/ic_profile.svg";
import formatUpdatedAt from "@/utils/dateUtils";
import { LineDivider } from "@/styles/CommonStyles";

interface AuthorInfo {
  nickname: string;
  image: string | null;
}

interface CommentItemProps {
  item: {
    content: string;
    updatedAt: string;
    writer: AuthorInfo;
  };
}

const CommentContainer = styled.section`
  padding: 2.4rem 0;
  position: relative;
`;

const KebabButton = styled.button`
  position: absolute;
  right: 0;
`;

const CommentContent = styled.p`
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 24px;
`;

const AuthorProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 767px) {
    gap: 1.6rem;
  }
`;

const UserProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--secondary-600);
  margin-bottom: 0.4rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-bottom: 0.2rem;
  }
`;

const Timestamp = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--secondary-400);

  @media (max-width: 767px) {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
`;

function CommentItem({ item }: CommentItemProps) {
  const authorInfo = item.writer;
  const formattedTimestamp = formatUpdatedAt(item.updatedAt);

  return (
    <>
      <CommentContainer>
        <KebabButton>
          <KebabIcon />
        </KebabButton>

        <CommentContent>{item.content}</CommentContent>

        <AuthorProfile>
          <UserProfileImage
            src={authorInfo.image || DefaultProfileImage}
            alt={`&{authorInfo.nickname}님의 프로필 사진`}
          />
          <div>
            <AuthorName>{authorInfo.nickname}</AuthorName>
            <Timestamp>{formattedTimestamp}</Timestamp>
          </div>
        </AuthorProfile>
      </CommentContainer>

      <LineDivider $margin="0" />
    </>
  );
}

export default CommentItem;
