import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { toWon } from "@util/formatter";
import { DefaultFieldState } from "@type/common";

interface NumberInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    DefaultFieldState {
  value: number;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      error,
      invalid,
      isTouched,
      isDirty,
      isValidating,
      placeholder,
      value,
      ...props
    }: NumberInputProps,
    ref
  ) => {
    const valid = !invalid && isDirty;
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
            value={value}
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
