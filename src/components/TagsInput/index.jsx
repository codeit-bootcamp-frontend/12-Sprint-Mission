import { useRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Tags from "../Tags";

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
    <div className={styles["form-item"]}>
      <label className={styles["item-label"]} htmlFor={id}>
        {label}
      </label>
      <div className={styles["item-field"]}>
        <input
          ref={inputRef}
          id={id}
          type="text"
          className={clsx(styles["item-box"], valid && styles.valid)}
          onKeyDown={handleKeyDown}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <Tags tags={tags} onRemoveItem={handleRemove} />
      {error && <div className={styles["item-error"]}>{error}</div>}
    </div>
  );
}
