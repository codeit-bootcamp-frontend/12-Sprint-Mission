import React from "react";
import NavBar from "../common/NavBar";
import "./AddProductPage.css";
import { useState, useRef, useEffect } from "react";
import Button from "../common/Button_Module";
import deleteBtn from "../../assets/delete_Btn.png";

type HashTag = string;

function AddProductPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [productName, setProductName] = useState<string>();
  const [productInfo, setProductInfo] = useState<string>();
  const [productPrice, setProductPrice] = useState<string>();
  const [productTag, setProductTag] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [hashTags, setHashTags] = useState<HashTag[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductInfo(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductTag(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      if (hashTags.includes(productTag)) {
        console.log("중복 태그");
        return;
      }
      setHashTags([...hashTags, productTag]);
      console.log("hashTag값은? ", hashTags);
      setProductTag("");
    }
  };

  const handleDeleteTag = (tagName: string) => {
    // const tagName = e.target.value;
    // console.log("태그는?", tagName.toString());
    // hashTags.filter(tagName);
    // console.log("삭제 후 태그는?", hashTags);
    // const tagName = e.target.value;

    const updatedHashTags = hashTags.filter((tag) => tag !== tagName);
    setHashTags(updatedHashTags);
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files ? e.target.files[0] : null;

    if (nextValue) {
      // console.log("nextValue는? ", nextValue);
      const nowUrl = URL.createObjectURL(nextValue);

      // console.log("nowURL는? ", nowUrl);
      setPreview(nowUrl);
    }
  };

  const handleClearPreview = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setPreview(null);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="registerForm">
          <div className="register-top">
            <h2>상품 등록하기</h2>
            {productName && productInfo && productPrice && productTag ? (
              <Button>등록</Button>
            ) : (
              <button disabled className="registerBtn">
                등록
              </button>
            )}
          </div>
          <div className="register-Contents">
            <section className="productImgForm">
              <label htmlFor="uploadImgBtn">상품 이미지</label>
              <div className="productImg">
                <input
                  className="uploadImgBtn"
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={handleImgChange}
                  ref={inputRef}
                />
                {preview && (
                  <div className="preview">
                    <img
                      className="previewImg"
                      src={preview}
                      alt="이미지 미리보기"
                    />
                    <button
                      className="clearPreviewImgBtn"
                      onClick={handleClearPreview}
                    >
                      x
                    </button>
                  </div>
                )}
              </div>
            </section>
            <section className="productName">
              <h3>상품명</h3>
              <input
                value={productName}
                onChange={handleNameChange}
                placeholder="상품명을 입력해주세요."
              />
            </section>
            <section className="productInfo">
              <h3>상품 소개</h3>
              <textarea
                value={productInfo}
                onChange={handleInfoChange}
                className="productInfo-input"
                placeholder="상품 소개를 입력해주세요."
              />
            </section>
            <section className="productPrice">
              <h3>판매가격</h3>
              <input
                value={productPrice}
                type="number"
                onChange={handlePriceChange}
                placeholder="판매 가격을 입력해주세요."
              />
            </section>
            <section className="productTags">
              <h3>태그</h3>
              <input
                value={productTag}
                onChange={handleTagChange}
                onKeyDown={handleAddTag}
                placeholder="태그를 입력해주세요."
              />
              <div className="hashTagForm">
                {hashTags.map((tag) => (
                  <div className="hashTag">
                    <p className="tagName">#{tag}</p>
                    <img
                      className="deleteTagBtn"
                      src={deleteBtn}
                      alt="태그 삭제 버튼"
                      onClick={() => handleDeleteTag(tag)}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductPage;
