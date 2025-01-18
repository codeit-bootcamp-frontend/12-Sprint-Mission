import { useState } from "react";
import styles from "./Additem.module.css";
import PlusIcon from "../img/plus.png";
import CloseIcon from "../img/close.png"; // x 아이콘 이미지 import

function AddItem() {
  const [image, setImage] = useState(null); // 하나의 이미지만 관리

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // 하나의 파일만 선택
    if (file) {
      const newImage = URL.createObjectURL(file); // Blob URL 생성
      setImage(newImage); // 이미지 상태 업데이트
    }
  };

  const handleImageRemove = () => {
    setImage(null); // 이미지 삭제
  };

  return (
    <form className={styles.container}>
      <div className={styles.register}>
        <h1>상품 등록하기</h1>
        <button>등록</button>
      </div>

      <div className={styles.register_img}>
        <h2>상품 이미지</h2>
        <div className={styles.img_upload_container}>
          {/* 업로드 버튼 */}
          <label htmlFor="imageUpload" className={styles.upload_box}>
            <img src={PlusIcon} alt="plus icon" />
            <span>이미지 등록</span>
            {/* {!image && (
              <>
                <img src={PlusIcon} alt="plus icon" />
                <span>이미지 등록</span>
              </>
            )} */}
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          {/* 이미지 미리보기 */}
          {image && (
            <div className={styles.image_preview}>
              <img
                src={image}
                alt="uploaded-preview"
                className={styles.preview_img}
              />
              <button
                className={styles.remove_button}
                onClick={handleImageRemove}
              >
                <img src={CloseIcon} alt="remove icon" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.register_name}>
        <h2>상품명</h2>
        <input placeholder="상품명을 입력해주세요" type="text" />
      </div>

      <div className={styles.register_info}>
        <h2>상품 소개</h2>
        <textarea placeholder="상품 소개를 입력하세요" />
      </div>

      <div className={styles.register_price}>
        <h2>판매가격</h2>
        <input placeholder="판매 가격을 입력해주세요" type="number" />
      </div>

      <div className={styles.register_tag}>
        <h2>태그</h2>
        <input placeholder="태그를 입력해주세요" type="text" />
      </div>
    </form>
  );
}

export default AddItem;
