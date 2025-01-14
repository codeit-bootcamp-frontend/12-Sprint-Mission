import { useState } from "react";
import InputItem from "../../ui/Input/InputItem";
import "./InquiryForm.css";

const inquiryPlacholder =
  "개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

function InquiryForm() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <form className="inquiry-form">
      <InputItem
        isTextArea
        id="inquiry"
        title="문의하기"
        placeholder={inquiryPlacholder}
        className="custom-inquiry-input"
        onChange={handleInputChange}
        value={inputValue}
      />
      <div className="inquiry-button-wrapper">
        <button type="submit" className={`inquiry-button ${inputValue ? "active" : ""} `}>
          등록
        </button>
      </div>
    </form>
  );
}

export default InquiryForm;
