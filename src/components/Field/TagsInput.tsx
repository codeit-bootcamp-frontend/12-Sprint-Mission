import { forwardRef, KeyboardEvent, useRef } from "react";
import clsx from "clsx";
import { Tags } from "@components/ui";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { FieldError } from "react-hook-form";

interface TagsInputProps {
  error: FieldError | FieldError[] | undefined;
  isValid: boolean;
  isTouched: boolean;
  isDirty: boolean;
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
}

export const TagsInput = forwardRef<HTMLInputElement, TagsInputProps>(
  ({ error, value, onChange, isValid, placeholder }: TagsInputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const valid = isValid && !error && value.length;
    const css = clsx(
      styles["field-box"],
      valid && styles.valid,
      error && styles.error
    );

    function handleKeyDown(e: KeyboardEvent) {
      if (e.nativeEvent.isComposing) return;

      if (e.key === "Enter") {
        e.preventDefault();
        if (!inputRef.current) return;

        const tag = inputRef.current.value.trim();
        if (tag && !value.includes(tag)) {
          const newTags = [...value, tag];
          onChange(newTags);
        }
        inputRef.current.value = "";
      }
    }

    function handleRemove(tag: string) {
      const newTags = value.filter((item) => item !== tag);
      onChange(newTags);
    }

    const extractError = Array.isArray(error)
      ? error?.find((err) => err && err.message)?.message ?? null
      : error?.message;

    return (
      <>
        <div className={styles.field}>
          <input
            ref={inputRef}
            type="text"
            className={css}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        </div>
        <Tags tags={value} onRemoveItem={handleRemove} />
        {extractError && <Error error={extractError} />}
      </>
    );
  }
);
