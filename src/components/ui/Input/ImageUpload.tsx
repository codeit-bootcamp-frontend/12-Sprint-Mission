import { useEffect, useState } from "react";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_X from "../../../assets/icons/ic_X.svg";
import "./ImageUpload.css";

function ImageUpload({ title }) {
  const [value, setValue] = useState();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
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
    <div>
      <div className="additem-label">
        <label>{title}</label>
      </div>
      <div className="image-preview-wrapper">
        <label htmlFor="image-upload" className="add-image-button">
          <img src={ic_plus} alt="이미지 등록" />
          이미지 등록
        </label>
        <input type="file" id="image-upload" accept="image/*" onChange={handleChange} />
        {preview && (
          <div className="preview-container">
            <img src={preview} alt="이미지 미리보기" className="image-preview" />
            <button className="remove-image-button">
              <img src={ic_X} alt="이미지 삭제" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
