import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  size?: "sm" | "lg";
  isValid: boolean;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, isValid, value, onChange, size, ...props }: TextareaProps, ref) => {
    const valid = isValid && value;
    const css = clsx(
      styles["field-box"],
      size && styles[size],
      valid && styles.valid,
      error && styles.error
    );

    return (
      <>
        <div className={styles.field}>
          <textarea
            ref={ref}
            className={css}
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
        {error && <Error error={error} />}
      </>
    );
  }
);
