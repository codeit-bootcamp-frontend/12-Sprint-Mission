import React, { ChangeEvent, useState } from "react";
import placeholderImg from "../../assets/preview-placeholder.svg";
import DeleteButton from "./DeleteButton";
import "./FileInput.css";

interface FileInputProps {
  title: string;
}

const FileInput: React.FC<FileInputProps> = ({ title }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (imagePreviewUrl) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      setTimeout(() => setError(""), 3000); // 3초 후 경고 메시지 해제
      return;
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleDelete = () => {
    setImagePreviewUrl("");
  };

  return (
    <div>
      {title && <label>{title}</label>}

      <div className="fileInputContainer">
        <label className="uploadButton" htmlFor="image-upload">
          <img src={placeholderImg} alt="이미지 등록" />
        </label>

        <input
          className="hiddenFileInput"
          id="image-upload"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />

        {imagePreviewUrl && (
          <div className="imagePreview">
            <img className="preview" src={imagePreviewUrl} alt="미리보기" />
            <div className="deleteButtonWrapper">
              <DeleteButton onClick={handleDelete} label="이미지 파일" />
            </div>
          </div>
        )}
        {error && <div className="errorMessage">{error}</div>}
      </div>
    </div>
  );
};

export default FileInput;
