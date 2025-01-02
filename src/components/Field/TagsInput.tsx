import { forwardRef, KeyboardEvent, useRef } from "react";
import clsx from "clsx";
import { Tags } from "@components/ui";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { FieldError } from "react-hook-form";

interface TagsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  error: FieldError | FieldError[] | undefined;
  isValid: boolean;
  isTouched: boolean;
  isDirty: boolean;
  placeholder?: string;
}

export const TagsInput = forwardRef(
  (
    { value, onChange, error, isValid, placeholder = "" }: TagsInputProps,
    _
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const valid = isValid && value.length;
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

    // 메세지가 string or string[] 일 수 있음 (zod schema 때문에)
    let tagsError: string | undefined;
    if (Array.isArray(error)) {
      tagsError = error.reduce((acc: string, errorItem, index) => {
        if (errorItem.message) {
          const message = `<${value[index]}>: ${errorItem.message}`;
          return acc ? acc + ", " + message : message;
        }
        return acc;
      }, "");
    } else {
      tagsError = error?.message || undefined;
    }

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
        {tagsError && <Error error={tagsError} />}
      </>
    );
  }
);
