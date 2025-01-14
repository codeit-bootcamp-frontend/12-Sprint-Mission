import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import styles from "./PostProductPage.module.css";
import ProductTag from "../component/ProductTag";
import iconX from "../asset/ic_X.png";

function PostProductPage() {
  const [preview, setPreview] = useState("");
  const [imgError, setImgError] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  //value값들
  const [nameInput, setnameInput] = useState("");
  const [desInput, setDesInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [tagValue, setTagValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setnameInput(e.target.value);
  };

  const handleChangeDesInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesInput(e.target.value);
  };

  //가격 input 함수
  const handleChangePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
    let number = e.target.value;
    //숫자 이외에 입력은 공백으로 바꿔줌
    number = number.replace(/[^0-9]/g, "");
    //3자리마다 콤마표시
    number = Number(number).toLocaleString();
    setPriceInput(number);
  };

  //button hover 조건
  let ButtonStyle =
    nameInput && desInput && priceInput && tagList.length
      ? `${styles.post_button_hover}`
      : `${styles.post_button}`;

  //파일 input 함수
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    if (preview) {
      setImgError(true);
      return;
    }
    setImgError(false);
    const value = e.target.files[0];
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
    console.log(nextPreview);
  };

  const handleClickFileDelete = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    URL.revokeObjectURL(preview);
    setPreview("");
    setImgError(false);
  };

  //태그 input 함수
  const handleChangeTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const isValue = tagList.find((element) => element === tagValue);
    if (e.keyCode === 13 && isValue) {
      alert("이미 있는 태그입니다.");
      return;
    } else if (e.keyCode === 13) {
      setTagValue("");
      setTagList([...tagList, tagValue]);
    }
  };

  const handleChangeTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const handlechangeTagList = (id: string) => {
    const nextTagList = tagList.filter((element) => element !== id);
    setTagList(nextTagList);
  };

  //폼 제출기능 막기
  const preventSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  return (
    <div className={styles.post}>
      <form className={styles.wrap} onSubmit={preventSubmit}>
        <div className={styles.title_wrap}>
          <h1 className={styles.post_title}>상품 등록하기</h1>
          <button type="button" className={ButtonStyle}>
            등록
          </button>
        </div>
        <div className={styles.input_list}>
          <div className={styles.input_wrap}>
            <label className={styles.label_input} htmlFor="productImg">
              상품 이미지
            </label>
            <div className={styles.file_preview_wrap}>
              <label className={styles.file_input_button} htmlFor="productImg">
                이미지 등록
              </label>
              <input
                className={styles.file_input}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChangeFile}
                ref={inputRef}
                id="productImg"
              />
              {preview && (
                <div className={styles.file_img_wrap}>
                  <img
                    className={styles.file_preview_img}
                    src={preview}
                    alt="이미지 미리보기"
                  />
                  <img
                    className={styles.file_preview_xicon}
                    src={iconX}
                    alt="이미지 삭제 아이콘"
                    onClick={handleClickFileDelete}
                  />
                </div>
              )}
            </div>
            {imgError && <p>*이미지 등록은 최대 1개까지 가능합니다.</p>}
          </div>
          <div className={styles.input_wrap}>
            <label className={styles.label_input} htmlFor="productName">
              상품명
            </label>
            <input
              className={styles.name_input}
              id="productName"
              type="name"
              onChange={handleChangeNameInput}
              value={nameInput}
              placeholder="상품명을 입력해주세요."
            />
          </div>
          <div className={styles.input_wrap}>
            <label className={styles.label_input} htmlFor="productDescription">
              상품 소개
            </label>
            <textarea
              className={styles.description_input}
              id="productDescription"
              placeholder="상품 소개를 입력해주세요."
              onChange={handleChangeDesInput}
              value={desInput}
            ></textarea>
          </div>
          <div className={styles.input_wrap}>
            <label className={styles.label_input} htmlFor="productPrice">
              판매가격
            </label>
            <input
              className={styles.price_input}
              id="productPrice"
              type="text"
              onChange={handleChangePriceInput}
              value={priceInput}
              placeholder="판매 가격을 입력해주세요."
            />
          </div>
          <div className={styles.input_wrap}>
            <label className={styles.label_input} htmlFor="productTag">
              태그
            </label>
            <input
              className={styles.tag_input}
              id="productTag"
              type="text"
              onKeyUp={handleChangeTag}
              onChange={handleChangeTagInput}
              value={tagValue}
              placeholder="태그를 입력해주세요."
            />
            <div className={styles.tag_list}>
              {tagList &&
                tagList.map((value) => (
                  <ProductTag
                    key={value}
                    value={value}
                    handlechangeTagList={handlechangeTagList}
                  />
                ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostProductPage;
