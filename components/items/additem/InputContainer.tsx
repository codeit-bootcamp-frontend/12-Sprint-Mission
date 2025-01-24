import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
// import { NumericFormat } from "react-number-format";
import styles from "../../../styles/items/additem.module.css";
import DeleteBtnImg from "@/public/assets/images/items/cancel.svg";
import { InitialValues } from "./types";

// 상품 정보 등록
function InputContainer({ setValues }: InitialValues) {
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [enteredNum, setEnterdNum] = useState<string | number>("");
  const [price, setPrice] = useState<number>(0);
  const priceInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof enteredNum === "string") {
      const numberPrice = enteredNum.replace(/,/g, "");
      setPrice(Number(numberPrice));
    }
    if (priceInput.current)
      if (priceInput.current.value === "") {
        setPrice(0);
      }

    setValues((prevValue) => ({
      ...prevValue,
      ["price"]: price,
    }));
  }, [enteredNum, price, setValues]);

  const handleChange = (name: string, value: string | number | string[]) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value }: { name: string; value: string | number | string[] } =
      e.target;
    handleChange(name, value);
  };

  const changeEnteredNum = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setEnterdNum(removedCommaValue.toLocaleString());

    if (isNaN(removedCommaValue) || removedCommaValue === 0) {
      setEnterdNum("");
    }
  };

  // onKeyDown 이벤트 키가 Enter와 일치하면 실행
  const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\+┼<>@\#$%&\'\"\\\(\=]/gi;
    // onKeyDown 이벤트의 한글 입력 시 이벤트가 두 번 호출 되는 버그 방지
    if (e.nativeEvent.isComposing) {
      return;
    }
    // 특수문자 및 스페이스바 입력 방지
    if (regExp.test(e.key)) {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      if ((e.target as HTMLInputElement).value === "") {
        // 빈 칸 엔터 방지
        e.preventDefault();
      } else {
        handleChange("tag", tagList);
        tagList.push(tag);
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  const handleAddValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  // 클릭한 태그 삭제
  const handleDeleteClick = (i: number) => {
    tagList.splice(i, 1);
    handleChange("tag", tagList);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>상품명</p>
        <input
          name="title"
          type="text"
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>상품 소개</p>
        <textarea
          name="description"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>판매가격</p>
        {/* NumericFormat 라이브러리 사용으로 Number input 콤마 처리 */}
        {/* <NumericFormat
          name="price"
          placeholder="판매 가격을 입력해주세요"
          onValueChange={(values) => {
            setPrice(values.value);
          }}
          thousandSeparator={true}
          prefix={""}
          getInputRef={priceInput}
        /> */}
        <input
          type="text"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          value={enteredNum}
          maxLength={20}
          onChange={(e) => {
            changeEnteredNum(e);
            // setPrice(e.target.value);
          }}
          ref={priceInput}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>태그</p>
        <input
          name="tag"
          type="text"
          placeholder="태그를 입력해주세요"
          onChange={handleAddValue}
          onKeyDown={activeEnter}
        />
        <ul className={styles.tagContainer}>
          {tagList &&
            // key 값으로 사용할 고유한 값이 없으므로 index 값 임시 부여
            tagList.map((item, i) => {
              return (
                <li key={i}>
                  <p className={styles.tagText}>#{item}</p>
                  <div
                    className={styles.circle}
                    onClick={() => handleDeleteClick(i)}
                  >
                    <DeleteBtnImg />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default InputContainer;
