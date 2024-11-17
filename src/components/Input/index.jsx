import { useRef, useState } from "react";
import iconViewOn from "../../assets/img/icon/icon_view_on.svg";
import iconViewOff from "../../assets/img/icon/icon_view_off.svg";
import styles from "./styles.module.scss";

export default function Input({
  type = "text",
  id,
  label,
  error,
  value,
  ...props
}) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;

  function handleVisibility() {
    setCurrentType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <div className={styles["form-item"]}>
      <label className={styles["item-label"]} htmlFor={id}>
        {label}
      </label>
      <div className={styles["item-field"]}>
        <input
          type={currentType}
          className={`${styles["input-box"]} ${valid ? styles.valid : ""}`}
          value={value}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className={`${styles["item-btn"]} ${styles["visibility-btn"]}`}
            onClick={handleVisibility}
          >
            <img
              src={currentType === "password" ? iconViewOff : iconViewOn}
              alt={
                currentType === "password"
                  ? "비밀번호 표시하기"
                  : "비밀번호 가리기"
              }
            />
          </button>
        )}
      </div>
      {error && <div className={styles["item-error"]}>{error}</div>}
    </div>
  );
}