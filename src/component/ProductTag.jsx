import iconX from "../asset/ic_X.png";
import styles from "./ProductTag.module.css";

function ProductTag({ value, handlechangeTagList, disable = true }) {
  const handleClickTag = () => {
    handlechangeTagList(value);
  };
  return (
    <div className={styles.tag_wrap}>
      <p className={styles.tag_name}>#{value}</p>
      {disable ? (
        <img
          src={iconX}
          className={styles.tag_xIcon}
          alt="태그 삭제 아이콘"
          onClick={handleClickTag}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductTag;
