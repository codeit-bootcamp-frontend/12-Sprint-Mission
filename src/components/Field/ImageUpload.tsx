import { ChangeEvent, forwardRef, useEffect, useRef } from "react";
import { Thumbnail } from "@components/ui";
import { Error } from "@components/Field";
import iconPlus from "@assets/img/icon/icon_plus.svg";
import styles from "./ImageUpload.module.scss";
import Image from "next/image";

type FileType = File | string | undefined;

interface ImageUploadProps {
  value: FileType[] | FileType;
  onChange: (file: FileType[] | FileType) => void;
  error?: string;
  placeholder?: string;
}

export const ImageUpload = forwardRef(
  ({ value, onChange, error, placeholder }: ImageUploadProps, _) => {
    const isArrayValue = Array.isArray(value);
    const _value = isArrayValue ? value[0] : value;
    const preview =
      _value instanceof File ? URL.createObjectURL(_value) : _value;

    const fileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      return () => {
        if (preview && _value instanceof File) {
          URL.revokeObjectURL(preview);
        }
      };
    }, [preview, _value]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      if (!e.target.files) return;

      const files = e.target.files;

      onChange(isArrayValue ? Array.from(files) : files[0]);

      if (fileRef.current) {
        fileRef.current.value = "";
      }
    }

    function handleRemove() {
      if (!fileRef.current) return;

      fileRef.current.value = "";
      onChange(isArrayValue ? [] : undefined);
    }

    return (
      <>
        <div className={styles["thumbnail-list"]}>
          <label className={styles["upload-button"]}>
            <span className={styles["upload-label"]}>
              <Image src={iconPlus} alt="이미지 업로드" />
              {placeholder}
            </span>
            <input
              className="a11y"
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleChange}
            />
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
        {error && <Error error={error} />}
      </>
    );
  }
);

ImageUpload.displayName = "ImageUpload";
