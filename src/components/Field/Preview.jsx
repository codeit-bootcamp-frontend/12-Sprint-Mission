import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./Preview.module.scss";

export function Preview({ src, onRemove }) {
  return (
    <figure className={styles.cover}>
      <button type="button" className={styles.button} onClick={onRemove}>
        <img src={clearIcon} alt="삭제" />
      </button>
      <img src={src} alt="상품 이미지" className={styles.img} />
    </figure>
  );
}
