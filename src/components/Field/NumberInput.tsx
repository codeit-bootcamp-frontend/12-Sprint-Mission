import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { toWon } from "@util/formatter";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  isValid: boolean;
  error?: string;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      onChange,
      error,
      isValid,
      placeholder,
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
            value={value}
            onChange={onChange}
            {...props}
          />
          <div className={formattedCss}>
            {value ? toWon(value) : placeholder}
          </div>
        </div>
        {error && <Error error={error} />}
      </>
    );
  }
);
