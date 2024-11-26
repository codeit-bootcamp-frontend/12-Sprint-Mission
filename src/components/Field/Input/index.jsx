import { useState } from "react";
import clsx from "clsx";
import Container from "../Container";
import iconViewOn from "@assets/img/icon/icon_view_on.svg";
import iconViewOff from "@assets/img/icon/icon_view_off.svg";
import styles from "../styles.module.scss";

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
    <Container id={id} label={label} error={error}>
      <input
        type={currentType}
        className={clsx(
          styles["item-box"],
          valid && styles.valid,
          error && styles.error
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
    </Container>
  );
}
