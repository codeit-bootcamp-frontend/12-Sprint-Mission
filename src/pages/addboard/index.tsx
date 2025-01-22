import { useState, useRef } from "react";
import styles from "./addboard.module.css";
import FormInput from "@/components/form/form-input";
import FormTextarea from "@/components/form/form-textarea";

export default function Page() {
  const [imageSrc, setImageSrc] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  const encodeFileToBase64: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.target.files) {
      const fileBlob = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setImageSrc(reader.result as string);
        }
      };

      reader.readAsDataURL(fileBlob);
    }
  };

  const onFileClose: React.MouseEventHandler<HTMLDivElement> = () => {
    setImageSrc("");
    if (fileRef.current && fileRef.current.value) {
      fileRef.current.value = "";
    }
  };

  return (
    <>
      <div className={styles.add_common_title}>
        <div className="common_title">게시글 쓰기</div>
        <button className="btn" type="button" disabled={true}>
          등록
        </button>
      </div>
      <form>
        <ul className={styles.form_list}>
          <li>
            <div className={`${styles.form_tit} ${styles.req}`}>제목</div>
            <div className={styles.form_content}>
              <FormInput type="text" placeholder="제목을 입력해주세요" />
            </div>
          </li>
          <li>
            <div className={`${styles.form_tit} ${styles.req}`}>내용</div>
            <div className={styles.form_content}>
              <FormTextarea placeholder="내용을 입력해주세요" />
            </div>
          </li>
          <li>
            <div className={styles.form_tit}>이미지</div>
            <div className={`${styles.form_content} ${styles.form_file}`}>
              <input
                type="file"
                id="addId"
                onChange={encodeFileToBase64}
                ref={fileRef}
              />
              {!imageSrc && (
                <label htmlFor="addId">
                  <img src="/assets/img/icon_add.svg" alt="이미지등록" />
                  <span>이미지등록</span>
                </label>
              )}
              {imageSrc && (
                <div className={styles.img_box}>
                  <div className={styles.close} onClick={onFileClose}>
                    <img src="/assets/img/icon_close.svg" alt="이미지삭제" />
                  </div>
                  <img src={imageSrc} alt={imageSrc} />
                </div>
              )}
            </div>
          </li>
        </ul>
      </form>
    </>
  );
}
