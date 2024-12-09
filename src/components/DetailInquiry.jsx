import React, { useState } from "react";
import "./detailInquiry.css";

function Inquiry() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      alert(`문의 내용: ${inputValue}`);
      setInputValue("");
    }
  };

  const isButtonEnabled = inputValue.trim().length > 0;

  return (
    <div className="form-container">
      <label htmlFor="inquiry" className="form-label">
        문의하기
      </label>
      <textarea
        className="form-textarea"
        id="inquiry"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={inputValue}
        onChange={handleChange}
      />
      <div className="button-container">
        <button
          className={`form-button ${isButtonEnabled ? "enabled" : "disabled"}`}
          onClick={handleSubmit}
          disabled={!inputValue.trim()}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default Inquiry;
