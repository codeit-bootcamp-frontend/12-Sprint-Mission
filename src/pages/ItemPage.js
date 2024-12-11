import styled from "styled-components";
import { getItemsComments, getItemsDetail, createComment } from "../api/api";
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import profileImg from "../assets/ic_profile.svg";
import backIcon from "../assets/ic_back.svg";
import ItemDetail from "../components/ItemDetail";
import ShowOptions from "../components/ShowOptions";
import CommentForm from "../components/CommentForm";
import EmptyImg from "../assets/Img_inquiry_empty.svg";

const ItemDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 64px;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: var(--gray-scale-200);
  border: none;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: -16px;
`;

const CommentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

const CommentLiText = styled.li`
  display: flex;
`;

const CommentContent = styled.p`
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  color: var(--gray-scale-800);
`;

const CommentLi = styled.li`
  display: flex;
  gap: 8px;
  position: relative;
  font-size: 12px;
`;

const CommentWriterDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const CommentWriter = styled.p`
  color: var(--gray-scale-600);
`;

const CommentDate = styled.p`
  color: var(--gray-scale-400);
`;

const ShowEditButtonWrap = styled.div`
  position: absolute;
  right: 0;
`;

const EditCommentTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  background-color: var(--gray-scale-100);
  font-size: 14px;
  line-height: 24px;
  font-weight: var(--font-weight-regular);
  color: var(--gray-scale-800);
  @media (max-width: 1199px) {
    height: 104px;
  }
  @media (max-width: 767px) {
    height: 130px;
  }
`;

const EditCommentSubmitButton = styled.button`
  padding: 12px 23px;
  background-color: var(--primary-color-100);
  border-radius: 8px;
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--gray-scale-0);
  cursor: pointer;
`;

const EditCommentCancelButton = styled.button`
  padding: 12px 23px;
  color: var(--gray-scale-500);
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
`;

const EmptyComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const EmptyCommentsImg = styled.img`
  width: 196px;
  height: 196px;
`;

const EmptyCommentsText = styled.p`
  font-size: 16px;
  color: var(--gray-scale-400);
  font-weight: var(--font-weight-regular);
`;

const MoveListButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px 64px;
  background-color: var(--primary-color-100);
  border-radius: 40px;
  font-size: 18px;
  color: var(--gray-scale-100);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color-200);
  }
  &:active {
    background-color: var(--primary-color-300);
  }
`;

const BackIconImg = styled.img`
  margin-left: 8px;
`;

function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState({
    tags: [],
    images: "",
    name: "",
    price: "",
    description: "",
    ownerId: "",
    createdAt: "",
    favoriteCount: 0,
  });
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const isValid = (value) => {
    return value && value.trim().length > 0;
  };

  const tags = item.tags;

  function formatDate(dateString) {
    return dayjs(dateString).format("YYYY.MM.DD");
  }

  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  function formatRelativeTime(dateString) {
    const date = dayjs(dateString);
    return date.fromNow();
  }

  const handleEditClick = (comment) => {
    setEditCommentId(comment.id);
    setEditValue(comment.content);
  };

  const handleCancelEdit = () => {
    setEditCommentId(null);
    setEditValue("");
  };

  useEffect(() => {
    async function fetchItem() {
      const data = await getItemsDetail(id);
      setItem(data);
    }
    fetchItem();
  }, [id]);

  useEffect(() => {
    async function fetchComments() {
      const commentData = await getItemsComments(id);
      setComments(commentData.list || []);
    }

    fetchComments();
  }, [id]);

  useEffect(() => {}, [value]);

  return (
    <>
      <ItemDetailWrap>
        <ItemDetail item={item} formatDate={formatDate} tags={tags} />
        <Line />
        <CommentForm value={value} isValid={isValid} setValue={setValue} />
        <CommentWrap>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentUl key={comment.id}>
                {editCommentId === comment.id ? (
                  <>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        //handleUpdateComment(comment.id);
                      }}
                    >
                      <EditCommentTextArea
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                    </form>
                    <CommentLi>
                      <img src={profileImg} alt="사용자 프로필 이미지" />
                      <CommentWriterDate>
                        <CommentWriter>{comment.writer.nickname}</CommentWriter>
                        <CommentDate>
                          {formatRelativeTime(comment.updatedAt)}
                        </CommentDate>
                      </CommentWriterDate>
                      <ShowEditButtonWrap>
                        <EditCommentCancelButton
                          type="button"
                          onClick={handleCancelEdit}
                        >
                          취소
                        </EditCommentCancelButton>
                        <EditCommentSubmitButton type="submit">
                          수정 완료
                        </EditCommentSubmitButton>
                      </ShowEditButtonWrap>
                    </CommentLi>
                    <Line />
                  </>
                ) : (
                  <>
                    <CommentLiText>
                      <CommentContent>{comment.content}</CommentContent>
                      <ShowOptions
                        handleEditClick={handleEditClick}
                        comment={comment}
                      />
                    </CommentLiText>
                    <CommentLi>
                      <img src={profileImg} alt="사용자 프로필 이미지" />
                      <CommentWriterDate>
                        <CommentWriter>{comment.writer.nickname}</CommentWriter>
                        <CommentDate>
                          {formatRelativeTime(comment.updatedAt)}
                        </CommentDate>
                      </CommentWriterDate>
                    </CommentLi>
                    <Line />
                  </>
                )}
              </CommentUl>
            ))
          ) : (
            <EmptyComments>
              <EmptyCommentsImg src={EmptyImg} alt="문의가 없어요 이미지" />
              <EmptyCommentsText>아직 문의가 없어요</EmptyCommentsText>
            </EmptyComments>
          )}
        </CommentWrap>
      </ItemDetailWrap>
      <Link to="/items">
        <MoveListButton>
          목록으로 돌아가기
          <BackIconImg src={backIcon} alt="목록으로 돌아가기 아이콘" />
        </MoveListButton>
      </Link>
    </>
  );
}

export default ItemPage;
