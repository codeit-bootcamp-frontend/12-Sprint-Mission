import userIcon from "../../asset/userIcon.png";
import kebabIcon from "../../asset/ic_kebab.png";
import styles from "./ProductComment.module.css";

function ProductComment() {
  return (
    <div>
      <p>혹시 사용기간이 어떻게 되실까요?</p>
      <div>
        <img alt="유저아이콘" src={userIcon} />
        <div>
          <span>똑똑한판다</span>
          <p>1시간 전</p>
        </div>
      </div>
      <img alt="케밥아이콘" src={kebabIcon} className={styles.kebabicon} />
    </div>
  );
}

export default ProductComment;
