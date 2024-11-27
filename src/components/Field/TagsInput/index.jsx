import { useRef } from "react";
import clsx from "clsx";
import FieldContainer from "../FieldContainer";
import Tags from "../../Tags";
import styles from "../styles.module.scss";

export default function TagsInput({
  id,
  label,
  error,
  value,
  name,
  onChange,
  placeholder,
}) {
  const inputRef = useRef(null);
  const valid = value.length && !error;

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const tag = inputRef.current.value.trim();
      if (tag && !value.includes(tag)) {
        const newTags = value ? `${value} ${tag}` : tag;
        onChange(name, newTags);
      }
      inputRef.current.value = "";
      inputRef.current.blur();
    }
  }

  function handleRemove(tag) {
    const newTags = value
      .split(" ")
      .filter((item) => item !== tag)
      .join(" ");
    onChange(name, newTags);
  }

  const tags = value.length ? value.split(" ") : [];

  return (
    <FieldContainer id={id} label={label} error={error}>
      <input
        ref={inputRef}
        id={id}
        type="text"
        className={clsx(
          styles["item-box"],
          valid && styles.valid,
          error && styles.error
        )}
        onKeyDown={handleKeyDown}
        name={name}
        placeholder={placeholder}
      />
      <Tags tags={tags} onRemoveItem={handleRemove} />
    </FieldContainer>
  );
}
