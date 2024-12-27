import styles from "./CommentSection.module.css";
import { useEffect, useState } from "react";
import { getProductComment } from "../../../api/ItemApi";
import menu from "../../../assets/images/menu.svg";
import userImg from "../../../assets/images/ic_profile.svg";

const CommentSection = ({ id }) => {
  const [productComment, setProductComment] = useState({ list: [] });

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
        <div className={styles.container}>
          <div className={styles["content-box"]}>
            <p className={styles.content}>{comment.content}</p>
            <div className={styles.user}>
              <img
                src={comment.writer.image ? comment.writer.image : userImg}
                alt={`${comment.writer.nickname}의 프로필 이미지`}
              />
              <div className={styles["user-info"]}>
                <p className={styles.name}>{comment.writer.nickname}</p>
                <p className={styles.date}>{comment.createdAt}</p>
              </div>
            </div>
          </div>
          <img src={menu} alt="메뉴 이미지" />
        </div>
      ))}
    </>
  );
};

export default CommentSection;
