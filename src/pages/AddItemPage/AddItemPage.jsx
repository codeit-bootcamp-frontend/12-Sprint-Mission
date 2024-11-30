import React from "react";
import "./AddItemPage.css";
function AddItemPage() {
  return (
    <div className="addItems__container">
      <div className="addItems-title__container">
        <h1 className="addItems-title">상품 등록하기</h1>
        <button className="addItems-button">등록</button>
      </div>
      <form className="input-form__container">
        <div className="addItems-img__container">
          <h2 className="addItems-img__title">상품 이미지</h2>

          <input
            type="file"
            placeholder="이미지 등록"
            className="addItems-img__input"
          />
        </div>
        <div className="addItems-name__container">
          <h2 className="addItems-name__title">상품명</h2>
          <input
            type="text"
            placeholder="상품명을 입력해주세요"
            className="addItems-name__input"
          />
        </div>
        <div className="addItems-explain__container">
          <h2 className="addItems-explain__title">상품 소개</h2>
          <input
            type="text"
            placeholder="상품 소개를 입력해주세요"
            className="addItems-explain__input"
          />
        </div>
        <div className="addItems-price__container">
          <h2 className="addItems-price__title">판매가격</h2>
          <input
            type="number"
            className="addItems-price__input"
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className="addItems-tag__container">
          <h2 className="addItems-tag__title">태그</h2>
          <input
            type="text"
            placeholder="태그를 입력해주세요"
            className="addItems-tag__input"
          />
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
