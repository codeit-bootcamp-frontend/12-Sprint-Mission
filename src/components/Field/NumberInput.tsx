import { InputHTMLAttributes, useState } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  error: string | null;
  value: number;
  formatter: (value: number) => string;
}

export function NumberInput({
  type = "number",
  error,
  value,
  formatter,
  ...props
}: NumberInputProps) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;
  const css = clsx(
    styles["field-box"],
    valid && styles.valid,
    error && styles.error
  );

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
