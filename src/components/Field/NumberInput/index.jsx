import { useState } from "react";
import clsx from "clsx";
import FieldContainer from "../FieldContainer";
import styles from "../styles.module.scss";

export default function NumberInput({
  type = "number",
  id,
  label,
  error,
  value,
  formatter,
  ...props
}) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;
  const formattedValue = formatter
    ? currentType === "text"
      ? formatter(value)
      : value
    : value;

  return (
    <FieldContainer id={id} label={label} error={error}>
      <input
        type={currentType}
        className={clsx(
          styles["item-box"],
          valid && styles.valid,
          error && styles.error
        )}
        value={formattedValue}
        onFocus={() => setCurrentType("number")}
        onBlur={() => setCurrentType("text")}
        {...props}
      />
    </FieldContainer>
  );
}
