import clsx from "clsx";
import FieldContainer from "../FieldContainer";
import styles from "../styles.module.scss";

export default function Textarea({ id, label, error, value, ...props }) {
  const valid = value && !error;

  return (
    <FieldContainer id={id} label={label} error={error}>
      <textarea
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
