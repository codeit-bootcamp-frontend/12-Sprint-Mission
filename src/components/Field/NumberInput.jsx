import { useState } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";

export function NumberInput({
  type = "number",
  error,
  value,
  formatter,
  ...props
}) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;
  const css = clsx(styles["field-box"], valid && "valid", error && "error");

  let formattedValue = value || "";

  if (formatter && formattedValue && currentType === "text") {
    formattedValue = formatter(value);
  }

  return (
    <>
      <div className={styles.field}>
        <input
          type={currentType}
          className={css}
          value={formattedValue}
          onFocus={() => setCurrentType("number")}
          onBlur={() => setCurrentType("text")}
          {...props}
        />
      </div>
      <Error error={error} />
    </>
  );
}
