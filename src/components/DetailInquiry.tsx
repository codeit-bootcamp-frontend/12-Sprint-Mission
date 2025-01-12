import React, { useState, ChangeEvent } from "react";
import styles from "./detailInquiry.module.css";

interface InquiryProps {}

function Inquiry(props: InquiryProps) {
  const [inputValue, setInputValue] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setInputValue(event.target.value);
  }

  function handleSubmit(): void {
    if (inputValue.trim()) {
      alert(`문의 내용: ${inputValue}`);
      setInputValue("");
    }
  }

  const isButtonEnabled = inputValue.trim().length > 0;

  return (
    <div className={styles["form-container"]}>
      <label htmlFor="inquiry" className={styles["form-label"]}>
        문의하기
      </label>
      <textarea
        className={styles["form-textarea"]}
        id="inquiry"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={inputValue}
        onChange={handleChange}
      />
      <div className={styles["button-container"]}>
        <button
          className={`${styles["form-button"]} ${
            isButtonEnabled ? styles["enabled"] : styles["disabled"]
          }`}
          onClick={handleSubmit}
          disabled={!isButtonEnabled}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default Inquiry;
