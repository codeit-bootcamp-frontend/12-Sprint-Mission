import React, { useState, useRef, ChangeEvent } from "react";
import PlusIcon from "../asset/icon/ic_plus.png";
import CloseIcon from "../asset/icon/ic_X.png";
import styles from "./AddImgForm.module.css";

interface AddImgFormProps {
  label: string;
}

function AddImgForm({ label }: AddImgFormProps) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  }

  function handleClick() {
    fileInputRef.current?.click();
  }

  function handleRemoveImage() {
    setImagePreviewUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div>
      <label>{label}</label>
      <div className={styles["img-upload-container"]}>
        <div
          onClick={handleClick}
          className={styles["img-upload-btn"]}
          style={{ cursor: "pointer" }}
        >
          <img
            src={PlusIcon}
            alt="업로드 아이콘"
            className={styles["plus-icon"]}
          />
          <p className={styles["img-upload-text"]}>이미지 등록</p>
        </div>

        {imagePreviewUrl && (
          <div className={styles["img-preview-container"]}>
            <img
              src={imagePreviewUrl}
              alt="미리보기"
              className={styles["img-preview"]}
            />
            <img
              src={CloseIcon}
              alt="삭제 버튼"
              onClick={handleRemoveImage}
              className={styles["img-remove-button"]}
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
