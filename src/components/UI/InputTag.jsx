import { useState } from "react";
import InputItem from "./InputItem";
import DeleteButton from "./DeleteButton";
import "./InputTag.css";

function InputTag({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState("");

  const handleEnterKeyDown = (e) => {
    const inputTagString = input.trim();
    if (e.key === "Enter" && inputTagString) {
      e.preventDefault();
      onAddTag(inputTagString);
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
        onKeyDown={handleEnterKeyDown}
        placeholder="태그를 입력해 주세요"
      />
      <div className="tagList">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
            <DeleteButton onClick={() => onRemoveTag(tag)} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default InputTag;
