import React, { KeyboardEvent, useState } from "react";
import InputItem from "./InputItem";
import DeleteButton from "./DeleteButton";
import "./TagInput.css";

interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagInput: React.FC<TagInputProps> = ({ tags, onAddTag, onRemoveTag }) => {
  const [input, setInput] = useState("");

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (e.key === "Enter" && inputString) {
      e.preventDefault();
      onAddTag(inputString);
      setInput("");
    }
  };

  return (
    <div className="tagInputContainer">
      <InputItem
        id="tags"
        label="태그"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder="태그를 입력해 주세요"
      />

      {tags.length > 0 && (
        <div className="tagButtonSection">
          {tags.map((tag) => (
            <div className="tag" key={`tag-${tag}`}>
              <div className="tagText">{tag}</div>

              <DeleteButton
                onClick={() => onRemoveTag(tag)}
                label={`${tag} 태그`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
