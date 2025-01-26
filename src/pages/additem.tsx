import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "./AddItem.css";
import registerImage from "../assets/images/registerImage.png";
import useDevice from "../hooks/useDevice";

function Additem() {
  const [productName, setProductName] = useState<string>("");
  const [productIntroduction, setProductIntroduction] = useState<string>("");
  const [sellingPrice, setSellingPrice] = useState<string>("");
  const [tagInput, setTagInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>(["티셔츠", "상의"]);
  const [preview, setPreview] = useState<string | undefined>();

  const { mode } = useDevice();

  const fileInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //페이지 새로고침 방지
    console.log({
      productName,
      productIntroduction,
      sellingPrice,
      tag: tags,
    });
  };

  const handleImageClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleProductImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handleClearClick = () => {
    const inputNode = fileInput.current;
    if (!inputNode) return;
    inputNode.value = "";
    setPreview(undefined);
  };

  const handleTagClearClick = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleProductName = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleProductIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProductIntroduction(e.target.value);
  };

  const handleSellingPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setSellingPrice(e.target.value);
  };

  const handleTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const isFormComplete = (): boolean => {
    return (
      productName.trim() !== "" &&
      productIntroduction.trim() !== "" &&
      sellingPrice.trim() !== "" &&
      tagInput.trim() !== "" //trim을 이용해 공백제거하고 빈 문자열인지 검사.
    );
  };

  return (
    <div className={`container ${mode}`}>
      <form className="product-form" onSubmit={handleSubmit}>
        <header className="header">
          <h2 className="header__title">상품 등록하기</h2>
          <button
            className="header__submit-btn"
            type="submit"
            disabled={!isFormComplete()}
            style={{
              backgroundColor: isFormComplete() ? "#3692FF" : "#9CA3AF",
            }}
          >
            등록
          </button>
        </header>

        <div className={`form-group ${mode}`}>
          <h3 className="form-label">상품 이미지</h3>
          <div className="images-container">
            <img
              src={registerImage}
              alt="상품등록 이미지"
              onClick={handleImageClick}
              className={`register-img ${mode}`}
            />
            {preview && (
              <img
                src={preview}
                alt="이미지 미리보기"
                className={`preview-img ${mode}`}
              />
            )}
            {/* preview 값 있을때만 보이게하기. 없으면 alt값 뜸.*/}
            <input
              type="file"
              onChange={handleProductImage}
              style={{ display: "none" }}
              ref={fileInput}
            />
            {/* input태그 만들어놓고, file기능만 쓰고 숨겨주고, 상품등록 이미지에 기능 넣기 */}
            {preview && (
              <button
                onClick={handleClearClick}
                className={`delete-btn ${mode}`}
              >
                X
              </button>
            )}
          </div>
          {preview && (
            <p className="image-warning">
              *이미지 등록은 최대 1개까지 가능합니다.
            </p>
          )}
        </div>
        <div className={`form-group ${mode}`}>
          <h3 className="form-label">상품명</h3>
          <input
            value={productName}
            onChange={handleProductName}
            placeholder="상품명을 입력해주세요."
            className="form-input"
          ></input>
        </div>
        <div className={`form-group ${mode}`}>
          <h3 className="form-label">상품 소개</h3>
          <textarea
            value={productIntroduction}
            onChange={handleProductIntroduction}
            placeholder="상품 소개를 입력해주세요."
            className="form-textarea"
          ></textarea>
        </div>
        <div className={`form-group ${mode}`}>
          <h3 className="form-label">판매가격</h3>
          <input
            type="number"
            value={sellingPrice}
            onChange={handleSellingPrice}
            placeholder="판매 가격을 입력해주세요."
            className="form-input"
          ></input>
        </div>
        <div className={`form-group ${mode}`}>
          <h3 className="form-label">태그</h3>
          <input
            value={tagInput}
            onChange={handleTag}
            placeholder="태그를 입력해주세요."
            className="form-input"
          ></input>
          <div className="tag__container">
            {tags.map((tag) => (
              <>
                <div className="tag-label">
                  #{tag}
                  <button
                    className="tag__delete-btn"
                    onClick={() => handleTagClearClick(tag)}
                  >
                    X
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Additem;
