import { useState } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import iconViewOn from "@assets/img/icon/icon_view_on.svg";
import iconViewOff from "@assets/img/icon/icon_view_off.svg";
import styles from "./Input.module.scss";

export function Input({ type = "text", error, value, ...props }) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;
  const css = clsx(styles["field-box"], valid && "valid", error && "error");

  function handleVisibility() {
    setCurrentType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <>
      <div className={styles.field}>
        <input type={currentType} className={css} value={value} {...props} />
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
      <Error error={error} />
    </>
  );
}
