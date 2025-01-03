import { ChangeEvent, KeyboardEvent, useState } from "react";
import ic_X from "../../../assets/icons/ic_X.svg";
import "./TagInput.css";

interface TagInputProps {
  id: string;
  title: string;
  placeholder: string;
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

function TagInput({ id, title, placeholder, tags, onAddTag, onRemoveTag }: TagInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
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

  const handleRemoveTag = (tag: string) => {
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
