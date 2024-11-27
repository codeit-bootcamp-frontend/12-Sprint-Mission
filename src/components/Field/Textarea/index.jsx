import { useState } from "react";
import clsx from "clsx";
import FieldContainer from "../FieldContainer";
import styles from "../styles.module.scss";

export default function Textarea({
  type = "text",
  id,
  label,
  error,
  value,
  ...props
}) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;

  return (
    <FieldContainer id={id} label={label} error={error}>
      <textarea
        type={currentType}
        className={clsx(
          styles["textarea-box"],
          valid && styles.valid,
          error && styles.error
        )}
        value={value}
        {...props}
      />
    </FieldContainer>
  );
}
