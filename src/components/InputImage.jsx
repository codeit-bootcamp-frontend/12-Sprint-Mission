import { useEffect, useRef, useState } from "react";
import imgButton from "../images/imgPlaceholder.svg";
import deleteButton from "../images/ic_X.svg";
import "../components/InputImage.scss";

function InputImage({ title, value, placeholder }) {
  const [preview, setPreview] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    if (nextValue) {
      const previewUrl = URL.createObjectURL(nextValue);
      setPreview(previewUrl); // 미리보기 URL 저장
    }
    // onChange(title, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    // onChange(title, null);
  };

  // useEffect(() => {
  //   if (!value) return;
  //   const nextPreview = URL.createObjectURL(value);
  //   setPreview(nextPreview);

  //   return () => {
  //     setPreview();
  //     URL.revokeObjectURL(nextPreview);
  //   };
  // }, [value]);

  return (
    <div>
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
      <div className="uploadImageContent">
        <label htmlFor="uploadButton" className="ImgUploadButton">
          <div>
            <img src={imgButton} alt="이미지 버튼" />
          </div>
        </label>
        {preview && (
          <div className="imgContents">
            <img className="imgPreview" src={preview} alt="이미지 미리보기" />
            <div>
              <button className="imgDelete" onClick={handleClearClick}>
                <img src={deleteButton} alt="지우기 버튼" />
              </button>
            </div>
          </div>
        )}
      </div>
      <input
        id="uploadButton"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
        style={{
          display: "none",
        }}
        title={placeholder}
      />
    </div>
  );
}

export default InputImage;
