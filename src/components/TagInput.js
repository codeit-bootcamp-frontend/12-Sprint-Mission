import React, { useState } from "react";
import InputItem from "./InputItem";
import DeleteButton from "./DeleteButton";
import "./TagInput.css";

function TagInput({ tags = [], onAddTag, onRemoveTag }) {
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
      <InputItem
        id="tags"
        label="태그"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder="태그를 입력해 주세요"
      />

      {tags.length > 0 && (
        <div className="TagButtonSection">
          {tags.map((tag) => (
            <div className="Tag" key={`tag-${tag}`}>
              <div className="TagText">{tag}</div>

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
}

export default TagInput;
