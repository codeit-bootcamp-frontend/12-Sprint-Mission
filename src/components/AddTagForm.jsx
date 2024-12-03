import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import CloseIcon from "../asset/icon/ic_X.png";
import "./AddTagForm.css";

function AddTagForm({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState("");

  const onPressEnter = (event) => {
    if (event.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (event.key === "Enter" && inputString) {
      event.preventDefault();
      onAddTag(inputString);
      setInput("");
    }
  };

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

      <div className="tag-buttons-section">
        {tags.map((tag) => (
          <div key={`tag-${tag}`} className="tag">
            <span className="tag-text">#{tag}</span>
            <img
              src={CloseIcon}
              alt="태그 삭제 버튼"
              onClick={() => onRemoveTag(tag)}
              aria-label={`${tag} 태그 삭제`}
              className="tag-delete-button"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTagForm;
