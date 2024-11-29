import { useState } from "react";
import InputItem from "./InputItem";

function InputTag({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <InputItem
        id="tags"
        label="태그"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="태그를 입력해 주세요"
      />
    </div>
  );
}

export default InputTag;
