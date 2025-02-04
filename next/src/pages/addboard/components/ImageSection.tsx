import styles from "./ImageSection.module.css";
import Image from "next/image";

type ImageSectionProps = {
  image: File | null;
  setImage: (file: File | null) => void;
};

export default function ImageSection({ image, setImage }: ImageSectionProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 첫번째 파일만 가져옴.(1개)
    if (file) {
      setImage(file);
    }
  };

  //사이트 이펙트?
  const handleImageDelete = (e: React.MouseEvent<HTMLImageElement>) => {
    setImage(null);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>이미지</h2>
      <label htmlFor="image-upload" className={styles.label}>
        <div className={styles.labelContent}>
          {image ? (
            <div className={styles.imageContainer}>
              <Image
                src={URL.createObjectURL(image)}
                alt="상품이미지 미리보기"
                width={282}
                height={282}
              />
              <Image
                className={styles.delete}
                src={"/images/ic_X.svg"}
                alt="삭제 버튼이미지"
                width={24}
                height={24}
                onClick={handleImageDelete}
              />
            </div>
          ) : (
            <>
              <Image
                src={"/images/ic_plus.svg"}
                alt="플러스 이미지"
                width={48}
                height={48}
              />
              <span className={styles.span}>이미지 등록</span>
            </>
          )}
        </div>
        <input
          id="image-upload"
          type="file"
          accept="image/png, image/jpeg"
          className={styles.input}
          placeholder="이미지 등록"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
}
