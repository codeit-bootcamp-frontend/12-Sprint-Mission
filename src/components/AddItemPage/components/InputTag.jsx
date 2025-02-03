import React, { useState, useEffect } from "react";
import "./InputTag.scss";
import deleteButton from "../../../img/ic_X.svg";

export default function InputTag({
  tags,
  setTags,
  title,

  placeholder,
  type = "text",
  onChange,
}) {
  const [inputValue, setInputValue] = useState(""); // 초기값으로 value 사용
  // 초기값 빈 배열

  const handleAddTag = (e) => {
    if (e) e.preventDefault(); // 이벤트 객체가 있을 경우에만 preventDefault 호출
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue(""); // 입력 필드 초기화
    }
  };

  const handleDeleteTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  useEffect(() => {
    console.log("tags", tags);
  }, [tags]);

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
          width: `100%`,
          height: `56px`,
          backgroundColor: "#F3F4F6",
          borderRadius: "12px",
          borderStyle: "none",
          margin: "24px 0",
          fontSize: "16px",
          paddingLeft: "24px",
        }}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value); // 내부 상태 업데이트
          if (onChange) onChange(e); // 부모 컴포넌트로 변경 전달
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTag(); // 이벤트 객체 없이 태그 추가 처리
          }
        }}
      />
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
            <button onClick={() => handleDeleteTag(tag)}>
              <img src={deleteButton} alt="지우기 버튼" />
            </button>
          </span>
        ))}
      </div>
    </>
  );
}
