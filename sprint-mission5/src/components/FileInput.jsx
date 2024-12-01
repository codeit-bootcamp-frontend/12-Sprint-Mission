import { useEffect, useRef, useState } from "react";
import plusIcon from "../assets/ic_plus.png";
import cancellIcon from "../assets/cancellIcon.png";
import "./FileInput.css";

function FileInput({ initialPreview, name, value, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
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
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className="fileInput">
      <label for="input-file" className="addimg">
        <img src={plusIcon}></img>
        이미지 등록
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="input-file"
        onChange={handleChange}
        ref={inputRef}
      />
      <div>
        {value && (
          <img src={preview} alt="이미지 미리보기" className="imgPreview" />
        )}
        {value && (
          <button
            type="button"
            onClick={handleClearClick}
            className="clearButton"
          >
            <img src={cancellIcon} className="cancellIcon"></img>
          </button>
        )}
      </div>
    </div>
  );
}

export default FileInput;
