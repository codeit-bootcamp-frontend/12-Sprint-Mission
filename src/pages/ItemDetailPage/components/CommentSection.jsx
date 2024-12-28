import styles from "./CommentSection.module.css";
import { useEffect, useState } from "react";
import { getProductComment } from "../../../api/ItemApi";
import Icon from "../../../components/Icon/Icon";
import userImg from "../../../assets/images/ic_profile.svg";

const CommentSection = ({ id }) => {
  const [productComment, setProductComment] = useState({ list: [] });
  const [isDropdownOpenId, setIsDropdownOpenId] = useState(null);

  // dropdown메뉴가 열린 commentId가 일치해야 메뉴가 열린다.
  const toggleDropdown = (commentId) => {
    setIsDropdownOpenId((prev) => (prev === commentId ? null : commentId));
  };

  const loadComment = async (id) => {
    try {
      const commentData = await getProductComment(id);
      console.log(commentData);
      setProductComment(commentData);
    } catch (error) {
      console.error("댓글 데이터 로드 실패", error);
    }
  };

  useEffect(() => {
    if (id) {
      loadComment(id);
    }
  }, [id]);

  return (
    <>
      {productComment.list.map((comment) => (
        <div key={comment.id} className={styles.container}>
          <div className={styles["content-box"]}>
            <p className={styles.content}>{comment.content}</p>
            <div className={styles.user}>
              <img
                src={comment.writer.image ? comment.writer.image : userImg}
                alt={`${comment.writer.nickname}의 프로필 이미지`}
              />
              <div className={styles["user-info"]}>
                <p className={styles.name}>{comment.writer.nickname}</p>
                <p className={styles.date}>
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <Icon
            className={styles.menu}
            name="menu"
            size="24"
            onClick={() => toggleDropdown(comment.id)}
          />
          {isDropdownOpenId === comment.id && (
            <div className={styles.dropdown}>
              <p className={styles["dropdown-text"]}>수정하기</p>
              <p className={styles["dropdown-text"]}>삭제하기</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentSection;
