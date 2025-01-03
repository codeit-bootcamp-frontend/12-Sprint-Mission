import { useState } from "react";
import ic_X from "../../../assets/icons/ic_X.svg";
import "./TagInput.css";

function TagInput({ id, title, placeholder, tags, onAddTag, onRemoveTag }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();

      const newTag = inputValue.trim();

      if (!tags.includes(newTag)) {
        onAddTag("#" + newTag);
      }

      setInputValue("");
    }
  };

  const handleRemoveTag = (tag) => {
    onRemoveTag(tag);
  };

  return (
    <div className="tag-input-wrapper">
      <div className="tag-input-label">
        <label htmlFor={id}>{title}</label>
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="input-item"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
      />
      <div className="tags-wrapper">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="tag-name">{tag}</span>
            <img src={ic_X} alt="태그 삭제" className="tag-remove-btn" onClick={() => handleRemoveTag(tag)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
