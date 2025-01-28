import { forwardRef, KeyboardEvent } from "react";
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

export const TagsInput = forwardRef<HTMLInputElement, TagsInputProps>(
  (
    { value, onChange, error, isValid, placeholder = "" }: TagsInputProps,
    ref
  ) => {
    const valid = isValid && value.length;
    const css = clsx(
      styles["field-box"],
      valid && styles.valid,
      error && styles.error
    );

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      if (e.nativeEvent.isComposing) return;

      if (e.key === "Enter") {
        e.preventDefault();

        const input = e.currentTarget;
        const tag = input.value.trim();

        if (tag) {
          const newTags = new Set([...value, tag]);
          onChange(Array.from(newTags));
          input.value = "";
        }
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
            ref={ref}
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
