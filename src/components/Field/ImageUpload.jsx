import useSingleFile from "@hooks/useSingleFile";
import { Thumbnail } from "@components/ui";
import { Error } from "@components/Field";
import iconPlus from "@assets/img/icon/icon_plus.svg";
import styles from "./ImageUpload.module.scss";

const LIMIT_SIZE_MB = 2;

export function ImageUpload({
  error,
  value,
  id,
  name,
  onChange,
  placeholder = "이미지 등록",
}) {
  const { fileProps, fileError, handleRemove, preview } = useSingleFile({
    name,
    value,
    accept: "image/*",
    limiSize: LIMIT_SIZE_MB,
    onChange: (file) => onChange(name, file),
    errorMessage: {
      max: "이미지 등록은 최대 1개까지 가능합니다.",
      accept: "이미지 파일만 업로드 가능합니다.",
    },
  });

  // 두가지 에러 동시에 보내려고 문자열로 합침
  const fileInputError = [fileError, error].filter((err) => err).join(" / ");

  return (
    <>
      <div className={styles["thumbnail-list"]}>
        <label className={styles["upload-button"]}>
          <span className={styles["upload-label"]}>
            <img src={iconPlus} alt="이미지 업로드" />
            {placeholder}
          </span>
          <input id={id} name={name} className="a11y" {...fileProps} />
        </label>
        <div className={styles.preview}>
          {preview && (
            <Thumbnail
              src={preview}
              alt="상품 이미지 등록"
              onRemove={handleRemove}
            />
          )}
        </div>
      </div>
      <Error error={fileInputError} />
    </>
  );
}
