import { useState } from "react";
import "./QuestionForm.css";

function QuestionForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const isInputValid = !inputValue;

  return (
    <form className="questionContainer">
      <label>문의하기</label>
      <input
        onChange={handleChange}
        className="qsInput"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있음, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <button className="qsBtn" disabled={isInputValid}>
        등록
      </button>
    </form>
  );
}

export default QuestionForm;
