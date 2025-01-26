import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import styles from "../../../styles/items/additem.module.css";
import UploadImg from "@/public/assets/images/items/upload.svg";
import ImgPreview from "./ImgPreview";
import { ImgFileProps } from "./types";

// 상품 이미지 등록
function ChooseImgFile({ imgFile, setImgFile }: ImgFileProps) {
  const [preview, setPreview] = useState("");
  const [isImgChk, setIsImgChk] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = (e?.target as HTMLInputElement).files![0];
    setImgFile(nextValue);
    // 같은 파일을 재업로드 할 경우 event가 trigger되지 않는 버그 방지
    e.target.value = "";
  };

  const handlePreventionClick = (e: MouseEvent) => {
    if (imgFile) {
      e.preventDefault();
      setIsImgChk(true);
    } else {
      setIsImgChk(false);
    }
  };

  const handleDeleteClick = () => {
    setIsImgChk(false);
    setImgFile(null);
    setPreview("");
  };

  useEffect(() => {
    if (!imgFile) return;
    const nextPreview = URL.createObjectURL(imgFile);
    setPreview(nextPreview);
  }, [imgFile]);

  return (
    <div className={`${styles.inputContainer} ${styles.fileBox}`}>
      <p className={styles.inputTitle}>상품 이미지</p>
      <div className={styles.previewContainer}>
        <div className={styles.coverTile}>
          <label htmlFor="imgUpload">
            <div className={styles.cover}>
              <UploadImg />
              <p className={styles.imgUpload}>이미지 등록</p>
            </div>
          </label>
          <input
            id="imgUpload"
            name="imgFile"
            type="file"
            className={styles.btnImgUpload}
            accept=".jpg, .png"
            onChange={handleChange}
            ref={inputRef}
            onClick={handlePreventionClick}
          />
        </div>
        {preview && (
          <div className={`${styles.coverTile} ${styles.thumbnail}`}>
            <ImgPreview
              preview={preview}
              handleDeleteClick={handleDeleteClick}
            />
          </div>
        )}
      </div>
      {isImgChk ? (
        <p className={styles.warnMessage}>
          *이미지 등록은 최대 1개까지 가능합니다.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChooseImgFile;
