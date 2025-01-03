import { ChangeEvent, useEffect, useState } from "react";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_X from "../../../assets/icons/ic_X.svg";
import "./ImageUpload.css";

interface ImageUploadProps {
  title: string;
}

function ImageUpload({ title }: ImageUploadProps) {
  const [value, setValue] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const nextValue = e.target.files ? e.target.files[0] : null;
    setValue(nextValue);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      if (nextPreview) {
        URL.revokeObjectURL(nextPreview);
      }
      setPreview(null);
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
