import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { forwardRef, TextareaHTMLAttributes } from "react";
import { DefaultFieldState } from "@type/common";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    DefaultFieldState {
  size?: "sm" | "lg";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      error,
      invalid,
      isTouched,
      isDirty,
      isValidating,
      size,
      ...props
    }: TextareaProps,
    ref
  ) => {
    const valid = !invalid && isTouched;
    const css = clsx(
      styles["field-box"],
      size && styles[size],
      valid && styles.valid,
      error && styles.error
    );

    return (
      <>
        <div className={styles.field}>
          <textarea ref={ref} className={css} {...props} />
        </div>
        {error?.message && <Error error={error.message} />}
      </>
    );
  }
);
