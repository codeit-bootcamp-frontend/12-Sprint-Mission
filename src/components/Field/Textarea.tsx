import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: FieldError | undefined;
  isValid: boolean;
  isTouched: boolean;
  isDirty: boolean;
  value: string;
  size?: "sm" | "lg";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      error,
      isValid,
      isTouched,
      isDirty,
      value,
      size,
      ...props
    }: TextareaProps,
    ref
  ) => {
    const valid = isValid && !error && value;
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
        {error && <Error error={error.message} />}
      </>
    );
  }
);
