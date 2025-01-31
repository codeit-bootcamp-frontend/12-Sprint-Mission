import { useEffect, useState } from "react";
import styles from "./Additem.module.css";
import PlusIcon from "../img/plus.png";
import CloseIcon from "../img/close.svg";

function AddItem() {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [productName, setProductName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태
  const [errorMessage, setErrorMessage] = useState("");

  // 이미지 업로드
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (image) {
        setErrorMessage("이미지 등록은 최대 1개까지 가능합니다.");
        return;
      }
      const newImage = URL.createObjectURL(file); // Blob URL 생성
      setImage(newImage);
      setErrorMessage(""); // 오류 메시지 초기화
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setErrorMessage(""); // 이미지를 삭제하면 오류 메시지 초기화
  };

  // 태그 생성
  const handleTagAdd = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      let inputValue = event.target.value.trim();
      if (inputValue) {
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
        {/* 경고 메시지 표시 */}
        {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
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
