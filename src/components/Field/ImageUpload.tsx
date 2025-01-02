import useSingleFile from "@hooks/useSingleFile";
import { Thumbnail } from "@components/ui";
import { Error } from "@components/Field";
import iconPlus from "@assets/img/icon/icon_plus.svg";
import styles from "./ImageUpload.module.scss";
import { FieldError } from "react-hook-form";
import { forwardRef } from "react";

const LIMIT_SIZE_MB = 2;

interface ImageUploadProps {
  name: string;
  value: (File | string)[];
  onChange: (file: (File | string)[]) => void;
  error: FieldError | undefined;
  placeholder?: string;
}

export const ImageUpload = forwardRef(
  ({ name, value, onChange, error, placeholder }: ImageUploadProps, _) => {
    const { fileProps, fileError, handleRemove, preview } = useSingleFile({
      value,
      onChange,
      accept: "image/*",
      limitSize: LIMIT_SIZE_MB,
      errorMessage: {
        max: "이미지 등록은 최대 1개까지 가능합니다.",
        accept: "이미지 파일만 업로드 가능합니다.",
      },
    });

    // react hook form error + useSingleFile hook error
    const fileInputError = [fileError, error?.message]
      .filter((err) => err)
      .join(" / ");

    return (
      <>
        <div className={styles["thumbnail-list"]}>
          <label className={styles["upload-button"]}>
            <span className={styles["upload-label"]}>
              <img src={iconPlus} alt="이미지 업로드" />
              {placeholder}
            </span>
            <input name={name} className="a11y" {...fileProps} />
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
        {fileInputError && <Error error={fileInputError} />}
      </>
    );
  }
);
