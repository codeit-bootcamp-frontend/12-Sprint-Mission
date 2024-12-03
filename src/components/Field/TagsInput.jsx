import { useRef } from "react";
import clsx from "clsx";
import { Tags } from "@components/ui";
import { Error } from "@components/Field";

export function TagsInput({ error, value, id, name, onChange, placeholder }) {
  const inputRef = useRef(null);
  const valid = value.length && !error;

  function handleKeyDown(e) {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();
      const tag = inputRef.current.value.trim();
      if (tag && !value.includes(tag)) {
        const newTags = [...value, tag];
        onChange(name, newTags);
      }
      inputRef.current.value = "";
    }
  }

  function handleRemove(tag) {
    const newTags = value.filter((item) => item !== tag);
    onChange(name, newTags);
  }

  return (
    <>
      <div className="field">
        <input
          ref={inputRef}
          type="text"
          className={clsx("field-box", valid && "valid", error && "error")}
          onKeyDown={handleKeyDown}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <Tags tags={value} onRemoveItem={handleRemove} />
      <Error error={error} />
    </>
  );
}
