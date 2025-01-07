import React, { ChangeEvent, useState } from "react";
import Header from "../Header/index.tsx";
import styles from "./addItem.module.css";

function AddItems() {
  const [productImg, setProductImg] = useState<string | null>(null); // 이미지 URL 또는 null
  const [title, setTitle] = useState<string>(""); // 상품명
  const [info, setInfo] = useState<string>(""); // 상품 소개
  const [price, setPrice] = useState<string>(""); // 판매 가격
  const [tagInput, setTagInput] = useState<string>(""); // 태그 입력
  const [tags, setTags] = useState<string[]>([]); // 태그 배열

  // 이미지 업로드 핸들러
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  // 이미지 삭제 핸들러
  const handleImageDelete = () => {
    setProductImg(null);
  };

  // 태그 추가 핸들러
  const handleTagAdd = () => {
    const tag = tagInput.trim();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput("");
    }
  };

  // 태그 삭제 핸들러
  const handleTagDelete = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  // 제출 가능 여부 체크
  const isSubmitEnabled =
    title.trim() && info.trim() && price.trim() && tags.length > 0;

  return (
    <div>
      <Header />
      <section>
        <div className={styles.add_items}>
          <div className={styles.product_add}>
            <h1>상품 등록하기</h1>
            <button disabled={!isSubmitEnabled} className={styles.submit_btn}>
              등록
            </button>
          </div>
          <div className={styles.add_items_form}>
            <h2>이미지 등록하기</h2>
            <div className={styles.image_container}>
              {!productImg ? (
                <label className={styles.upload_label}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={styles.file_input}
                  />
                  <div className={styles.upload_placeholder}>
                    <div className={styles.upload_placeholder_plus}>+</div>
                    <br />
                    이미지 등록
                  </div>
                </label>
              ) : (
                <div className={styles.image_preview}>
                  <img
                    src={productImg}
                    alt="상품 이미지 미리보기"
                    className={styles.uploaded_image}
                  />
                  <button
                    className={styles.delete_img_btn}
                    onClick={handleImageDelete}
                  >
                    X
                  </button>
                </div>
              )}
            </div>
            <div className={styles.product_title}>
              <h2>상품명</h2>
              <input
                type="text"
                placeholder="상품명을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.product_info}>
              <h2>상품 소개</h2>
              <textarea
                placeholder="상품 소개를 입력해주세요"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.sale_cost}>
              <h2>판매 가격</h2>
              <input
                type="text"
                placeholder="판매 가격을 입력해주세요"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className={styles.tag}>
              <h2>태그</h2>
              <input
                type="text"
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleTagAdd()}
              />
              <div className={styles.tag_list}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag_item}>
                    #{tag}
                    <button
                      className={styles.delete_tag_btn}
                      onClick={() => handleTagDelete(tag)}
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddItems;
