import { FocusEvent, forwardRef, InputHTMLAttributes, useState } from "react";
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
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      error,
      isValid,
      isTouched,
      isDirty,
      placeholder,
      onFocus,
      onBlur,
      value,
      ...props
    }: NumberInputProps,
    ref
  ) => {
    const [isInput, setIsInput] = useState(false);
    const valid = isValid && !error && value;
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

    function handleFocus(e: FocusEvent<HTMLInputElement>) {
      setIsInput(true);

      if (onFocus) {
        onFocus(e);
      }
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
      setIsInput(false);

      if (onBlur) {
        onBlur(e);
      }
    }

    return (
      <>
        <div className={styles.field}>
          {!isInput && (
            <div className={formattedCss}>
              {(value && toWon(value as string)) || placeholder}
            </div>
          )}
          <input
            ref={ref}
            type="number"
            className={css}
            placeholder={placeholder}
            {...props}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        {error && <Error error={error.message} />}
      </>
    );
  }
);
