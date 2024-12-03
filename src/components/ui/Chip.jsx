import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./Chip.module.scss";

export function Chip({ removable, text, onClick }) {
  return (
    <div className={styles.chip}>
      {text}
      {removable && (
        <button type="button" className={styles.button} onClick={onClick}>
          <img src={clearIcon} alt="지우기" />
        </button>
      )}
    </div>
  );
}
