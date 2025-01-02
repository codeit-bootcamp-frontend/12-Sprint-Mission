import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { toWon } from "@util/formatter";
import { FieldError } from "react-hook-form";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined;
  isValid: boolean;
  isTouched: boolean;
  isDirty: boolean;
  value: number;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      error,
      isValid,
      isTouched,
      isDirty,
      placeholder,
      value,
      ...props
    }: NumberInputProps,
    ref
  ) => {
    const valid = isValid && value;
    const css = clsx(
      styles["field-box"],
      valid && styles.valid,
      error && styles.error
    );

    const formattedCss = clsx(
      css,
      styles.formatted,
      !value && styles.placeholder
    );

    return (
      <>
        <div className={styles.field}>
          <input
            ref={ref}
            type="number"
            className={css}
            placeholder={placeholder}
            {...props}
          />
          <div className={formattedCss}>
            {value ? toWon(value) : placeholder}
          </div>
        </div>
        {error?.message && <Error error={error.message} />}
      </>
    );
  }
);
