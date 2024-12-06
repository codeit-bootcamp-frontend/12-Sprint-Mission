import React from "react";
import { useState } from "react";
import "./InputTag.scss";
import deleteButton from "../images/ic_X.svg";

function InputTag({ title, height, placeholder, type = "text" }) {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]); // 태그 리스트 관리

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <>
      <div
        style={{
          fontSize: `18px`,
          fontWeight: "700",
          lineHeight: "26px",
          textUnderlinePosition: " from-font",
          textDecorationSkipInk: "none",
        }}
      >
        {title}
      </div>
      <input
        style={{
          height: `${height}px`,
        }}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTag(e);
          }
        }}
      />
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}{" "}
            <button onClick={() => handleDeleteTag(tag)}>
              <img src={deleteButton} alt="지우기 버튼" />
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

export default InputTag;
