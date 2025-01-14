import React, { useState, KeyboardEvent } from "react";
import AddItemForm from "./AddItemForm.tsx";
import CloseIcon from "../asset/icon/ic_X.png";
import styles from "./AddTagForm.module.css";

interface AddTagFormProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

function AddTagForm({ tags, onAddTag, onRemoveTag }: AddTagFormProps) {
  const [input, setInput] = useState<string>("");

  function onPressEnter(
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    if (event.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (event.key === "Enter" && inputString) {
      event.preventDefault();
      onAddTag(inputString);
      setInput("");
    }
  }

  return (
    <div>
      <AddItemForm
        id="tags"
        label="태그"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder="태그를 입력해주세요"
      />

      <div className={styles["tag-buttons-section"]}>
        {tags.map((tag) => (
          <div key={`tag-${tag}`} className={styles["tag"]}>
            <span className={styles["tag-text"]}>#{tag}</span>
            <img
              src={CloseIcon}
              alt="태그 삭제 버튼"
              onClick={() => onRemoveTag(tag)}
              aria-label={`${tag} 태그 삭제`}
              className={styles["tag-delete-button"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTagForm;
