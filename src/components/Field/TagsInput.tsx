import { forwardRef, KeyboardEvent, useRef } from "react";
import clsx from "clsx";
import { Tags } from "@components/ui";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";
import { Tags as TagsType } from "@type/product";

interface TagsInputProps {
  value: TagsType;
  onChange: (tags: TagsType) => void;
  placeholder?: string;
  isValid: boolean;
  error?: string;
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
        {error && <Error error={error} />}
      </>
    );
  }
);

TagsInput.displayName = "TagsInput";
