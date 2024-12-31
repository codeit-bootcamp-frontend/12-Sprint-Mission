import useSingleFile from "@hooks/useSingleFile";
import { Thumbnail } from "@components/ui";
import { Error } from "@components/Field";
import iconPlus from "@assets/img/icon/icon_plus.svg";
import styles from "./ImageUpload.module.scss";
import { FieldError } from "react-hook-form";
import { forwardRef } from "react";

const LIMIT_SIZE_MB = 2;

interface ImageUploadProps {
  value: (File | string)[];
  name: string;
  onChange: (file: (File | string)[]) => void;
  error: FieldError | undefined;
  placeholder?: string;
}

export const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ value, onChange, name, error, placeholder }: ImageUploadProps, ref) => {
    const { fileProps, fileError, handleRemove, preview } = useSingleFile({
      value,
      accept: "image/*",
      onChange,
      limitSize: LIMIT_SIZE_MB,
      errorMessage: {
        max: "이미지 등록은 최대 1개까지 가능합니다.",
        accept: "이미지 파일만 업로드 가능합니다.",
      },
    });
    // 두가지 에러 동시에 보내려고 문자열로 합침
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
