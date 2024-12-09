import NavBar from "../Nav/NavBar";
import "../AddItemPage/AddItemPage.scss";
import InputForm from "../AddItemPage/InputForm";
import InputImage from "../AddItemPage/InputImage";
import InputTag from "./InputTag";
import { useRef, useState, useMemo } from "react";

function AddItemPage() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    tag: [],
  });

  const handleInputChange = (field) => (e) => {
    setValues((preValues) => ({
      ...preValues,
      [field]: e.target.value,
    }));
  };

  const isSubmitDisabled = useMemo(
    () => !values.title || !values.description || !values.price || !values.tag,
    [values.title, values.description, values.price, values.tag]
  );

  // const isSubmitDisabled =
  //   !values.title || !values.description || !values.price || !values.tag;

  return (
    <>
      <NavBar />
      <form className="formContent">
        <div className="formTitle">상품 등록하기</div>
        <button className="formBtn" type="submit" disabled={isSubmitDisabled}>
          등록
        </button>
        <InputImage title={"상품이미지"} placeholder={"이미지 등록 "} />
        <InputForm
          title={"상품명"}
          value={values.title}
          height={56}
          placeholder={"상품명을 입력해주세요"}
        />
        <InputForm
          title={"상품소개"}
          value={values.description}
          height={282}
          placeholder={"상품 소개를 입력해주세요"}
        />
        <InputForm
          title={"판매가격"}
          value={values.price}
          height={56}
          placeholder={"판매 가격을 입력해주세요"}
          type="number"
        />
        <InputTag
          title={"태그"}
          value={values.tag}
          height={56}
          placeholder={"태그을 입력해주세요"}
        />
      </form>
    </>
  );
}

export default AddItemPage; // default export
