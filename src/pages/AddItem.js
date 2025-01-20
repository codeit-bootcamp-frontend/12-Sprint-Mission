import { useEffect, useState } from "react";
import styles from "./Additem.module.css";
import PlusIcon from "../img/plus.png";
import CloseIcon from "../img/close.svg";

function AddItem() {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [productName, setProductName] = useState(""); // 상품명 상태
  const [productInfo, setProductInfo] = useState(""); // 상품 소개 상태
  const [productPrice, setProductPrice] = useState(""); // 판매 가격 상태
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // 하나의 파일만 선택
    if (file) {
      const newImage = URL.createObjectURL(file); // Blob URL 생성
      setImage(newImage);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleTagAdd = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      let inputValue = event.target.value.trim(); // 입력값 정리
      if (inputValue) {
        // 이미 #으로 시작하지 않으면 추가
        if (!inputValue.startsWith("#")) {
          inputValue = `#${inputValue}`;
        }
        // 태그 중복 확인 후 추가
        if (!tags.includes(inputValue)) {
          setTags((prevTags) => [...prevTags, inputValue]);
        }
      }

      setTimeout(() => {
        event.target.value = ""; // 입력 필드 초기화 (타이밍 조정)
      }, 0);
    }
  };

  const handleTagRemove = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // 모든 필드가 입력되었는지 확인하는 유효성 검사 로직
  useEffect(() => {
    const isValid =
      productName.trim() !== "" &&
      productInfo.trim() !== "" &&
      productPrice.trim() !== "" &&
      tags.length > 0;
    setIsFormValid(isValid);
  }, [productName, productInfo, productPrice, tags]);

  return (
    <form className={styles.container}>
      <div className={styles.register}>
        <h1>상품 등록하기</h1>
        <button
          className={
            isFormValid ? styles.active_button : styles.disabled_button
          }
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>

      <div className={styles.register_img}>
        <h2>상품 이미지</h2>
        <div className={styles.img_upload_container}>
          <label htmlFor="imageUpload" className={styles.upload_box}>
            <img src={PlusIcon} alt="plus icon" />
            <span>이미지 등록</span>
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
                <img src={CloseIcon} alt="x" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.register_name}>
        <h2>상품명</h2>
        <input
          placeholder="상품명을 입력해주세요"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)} // 상태 업데이트
        />
      </div>
      <div className={styles.register_info}>
        <h2>상품 소개</h2>
        <textarea
          placeholder="상품 소개를 입력하세요"
          value={productInfo}
          onChange={(e) => setProductInfo(e.target.value)} // 상태 업데이트
        />
      </div>
      <div className={styles.register_price}>
        <h2>판매가격</h2>
        <input
          placeholder="판매 가격을 입력해주세요"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)} // 상태 업데이트
        />
      </div>

      <div className={styles.register_tag}>
        <h2>태그</h2>
        <input
          placeholder="태그를 입력해주세요"
          type="text"
          onKeyDown={handleTagAdd}
        />
        {/* 태그 리스트 */}
        <div className={styles.tag_list}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag_item}>
              <span>{tag}</span>
              <button
                type="button"
                className={styles.tag_remove_button}
                onClick={() => handleTagRemove(index)}
              >
                <img src={CloseIcon} alt="x" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default AddItem;
