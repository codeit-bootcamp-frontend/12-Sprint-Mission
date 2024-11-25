import { useState } from "react";
import clsx from "clsx";
import iconViewOn from "@assets/img/icon/icon_view_on.svg";
import iconViewOff from "@assets/img/icon/icon_view_off.svg";
import styles from "./styles.module.scss";

export default function Input({
  type = "text",
  as = "input",
  id,
  label,
  error,
  value,
  ...props
}) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;
  const Component = as;

  function handleVisibility() {
    setCurrentType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <div className={styles["form-item"]}>
      <label className={styles["item-label"]} htmlFor={id}>
        {label}
      </label>
      <div className={styles["item-field"]}>
        <Component
          type={currentType}
          className={clsx(
            styles["item-box"],
            styles[`${as}-box`],
            valid && styles.valid
          )}
          value={value}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className={clsx(styles["item-btn"], styles["visibility-btn"])}
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
