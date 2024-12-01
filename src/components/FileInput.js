import React, { useState } from "react";
import placeholderImg from "../assets/preview-placeholder.svg";
import DeleteButton from "./DeleteButton";
import "./FileInput.css";

function FileInput({ title }) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
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

      <div className="FileInputContainer">
        <label className="UploadButton" htmlFor="image-upload">
          <img src={placeholderImg} alt="이미지 등록" />
        </label>

        <input
          className="HiddenFileInput"
          id="image-upload"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />

        {imagePreviewUrl && (
          <div className="ImagePreview">
            <img className="Preview" src={imagePreviewUrl} alt="미리보기" />
            <div className="DeleteButtonWrapper">
              <DeleteButton onClick={handleDelete} label="이미지 파일" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileInput;
