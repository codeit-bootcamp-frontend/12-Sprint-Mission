import { useState } from "react";

export default function ItemComment() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "104px",
        margin: "16px 0px",
      }}
    >
      <textarea
        placeholder="  개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
        모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게
        있습니다."
        style={{
          height: "104px",
          width: "100%",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "26px",
          border: "1px solid #D1D5DB",
          borderRadius: "12px",
          resize: "none",
          backgroundColor: "#F3F4F6",
          paddingTop: "10px",
        }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "8px",
          padding: "10px 20px",
          backgroundColor: inputValue.trim() ? "#007BFF" : "#9CA3AF",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: inputValue.trim() ? "pointer" : "not-allowed",
        }}
        disabled={!inputValue.trim()}
      >
        등록
      </button>
    </div>
  );
}
