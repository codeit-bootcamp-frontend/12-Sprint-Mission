import { formatRelativeTime } from "../../../utils/formatRelativeTime";
import "./CommentList.css";
import profile from "../../../assets/images/profile.svg";
import ic_kebab from "../../../assets/icons/ic_kebab.svg";
import inquiry_empty from "../../../assets/images/Img_inquiry_empty.svg";

function CommentList({ comments }) {
  const getRelativeTime = (createdAt, updatedAt) => {
    if (updatedAt && updatedAt !== createdAt) {
      return formatRelativeTime(updatedAt);
    }
    return formatRelativeTime(createdAt);
  };

  return (
    <div className="comments-list">
      {comments?.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment-wrapper">
            <p className="comment-content">{comment.content}</p>
            <img src={ic_kebab} alt="수정 삭제 버튼" className="comment-options" />
            <div className="comment-author">
              <img src={profile} alt={`${comment.writer.nickname} 프로필 이미지`} className="comment-profile-image" />
              <div className="comment-author-detail">
                <p className="comment-nickname">{comment.writer.nickname}</p>
                <p className="comment-date">{getRelativeTime(comment.createdAt, comment.updatedAt)}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="comment-empty">
          <img src={inquiry_empty} alt="댓글 없음" className="comment-empty-image" />
          <p className="comment-empty-text">아직 문의가 없어요</p>
        </div>
      )}
    </div>
  );
}

export default CommentList;
