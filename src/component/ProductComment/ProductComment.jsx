import userIcon from "../../asset/userIcon.png";
import kebabIcon from "../../asset/ic_kebab.png";
import styles from "./ProductComment.module.css";

function ProductComment() {
  return (
    <div className={styles.comment_container}>
      <p className={styles.comment_content}>혹시 사용기간이 어떻게 되실까요?</p>
      <div className={styles.user_wrap}>
        <img className={styles.user_img} alt="유저아이콘" src={userIcon} />
        <div className={styles.user_name_wrap}>
          <span className={styles.user_name}>똑똑한판다</span>
          <p className={styles.user_time}>1시간 전</p>
        </div>
      </div>
      <img alt="케밥아이콘" src={kebabIcon} className={styles.kebabicon} />
    </div>
  );
}

export default ProductComment;
