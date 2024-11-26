import { useEffect, useRef, useState } from "react";
import Preview from "./Preview";
import iconPlus from "@assets/img/icon/icon_plus.svg";
import styles from "./styles.module.scss";

const LIMIT_SIZE_MB = 2;

export default function FileInput({ id, label, error, value, name, onChange }) {
  const [preview, setPreview] = useState(null);
  const [fileError, setFileError] = useState(null);
  const fileRef = useRef(null);

  useEffect(() => {
    if (!value) return;
    const objectURL = URL.createObjectURL(value);
    setPreview(objectURL);

    return () => {
      setPreview(null);
      URL.revokeObjectURL(objectURL);
    };
  }, [value]);

  function handleChange(e) {
    const currentFile = e.target.files[0];
    setFileError(null);

    if (value) {
      return setFileError("이미지 등록은 최대 1개까지 가능합니다.");
    }

    if (!currentFile.type.startsWith("image/")) {
      return setFileError("이미지 파일만 업로드 가능합니다.");
    }

    if (currentFile.size > LIMIT_SIZE_MB * 1024 * 1024) {
      return setFileError(
        `사이즈가 너무 큽니다. ${LIMIT_SIZE_MB}mb 이하로 업로드 해주세요.`
      );
    }

    fileRef.current.value = "";
    onChange(name, currentFile);
  }

  function handleReset() {
    if (!fileRef.current) return;

    fileRef.current.value = "";
    setFileError(null);
    onChange(name, undefined);
  }

  return (
    <div className={styles["form-item"]}>
      <label className={styles["item-label"]} htmlFor={id}>
        {label}
      </label>
      <div className={styles["item-field"]}>
        <div className={styles["thumbnail-list"]}>
          <label className={styles["upload-button"]}>
            <span className={styles["upload-label"]}>
              <img src={iconPlus} alt="이미지 업로드" />
              이미지 등록
            </span>
            <input
              ref={fileRef}
              id={id}
              type="file"
              name={name}
              onChange={handleChange}
              className="a11y"
            />
          </label>
          {preview && <Preview src={preview} onReset={handleReset} />}
        </div>
      </div>
      {fileError && <div className={styles["item-error"]}>{fileError}</div>}
      {error && <div className={styles["item-error"]}>{error}</div>}
    </div>
  );
}
