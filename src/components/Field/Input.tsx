import { forwardRef, InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Error } from "@components/Field";
import iconViewOn from "@assets/img/icon/icon_view_on.svg";
import iconViewOff from "@assets/img/icon/icon_view_off.svg";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  isValid: boolean;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = "text", value, onChange, isValid, error, ...props },
  ref
) {
  const [currentType, setCurrentType] = useState(type);
  const valid = isValid && value;
  const css = clsx(
    styles["field-box"],
    valid && styles.valid,
    error && styles.error
  );
  function handleVisibility() {
    setCurrentType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <>
      <div className={styles.field}>
        <input
          ref={ref}
          type={currentType}
          className={css}
          value={value}
          onChange={onChange}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className={clsx(styles["item-btn"], styles["visibility-btn"])}
            onClick={handleVisibility}
          >
            <Image
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
      {error && <Error error={error} />}
    </>
  );
});
