import React, { useState } from "react";
import PlusIcon from "../asset/icon/ic_plus.png";
import CloseIcon from "../asset/icon/ic_X.png";
import "./AddImgForm.css";

function AddImgForm({ label }) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const fileInputRef = React.useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 미리보기 주소 값(Object URL) 생성
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImagePreviewUrl("");
    fileInputRef.current.value = "";
  };

  return (
    <div>
      <label>{label}</label>
      <div className="img-upload-container">
        <div
          onClick={handleClick}
          className="img-upload-btn"
          style={{ cursor: "pointer" }}
        >
          <img src={PlusIcon} alt="업로드 아이콘" className="plus-icon" />
          <p className="img-upload-text">이미지 등록</p>
        </div>

        {imagePreviewUrl && (
          <div className="img-preview-container">
            <img src={imagePreviewUrl} alt="미리보기" className="img-preview" />
            <img
              src={CloseIcon}
              alt="삭제 버튼"
              onClick={handleRemoveImage}
              className="img-remove-button"
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        id="img-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default AddImgForm;
