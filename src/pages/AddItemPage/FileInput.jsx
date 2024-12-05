import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./AddItemPage";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState("");
  const inputRef = useRef();
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="fileInput">
      <input
        accept="image/png, image/jpeg"
        className="input inputImg"
        ref={inputRef}
        type="file"
        onChange={handleChange}
      />
      <div className="previewBox">
        {value && <img src={preview} alt="이미지 미리보기" className="previewImg" />}
        {value && <button className="clearBtn" onClick={handleClearClick}></button>}
      </div>
    </div>
  );
}

export default FileInput;
