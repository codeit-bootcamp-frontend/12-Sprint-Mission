import NavBar from "../components/NavBar";
import "../pages/AddItemPage.scss";
import InputForm from "../components/InputForm";
import InputImage from "../components/InputImage";
import { useRef, useState } from "react";

function AddItemPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    tag: "",
  });

  const handleChange = () => {};

  return (
    <>
      <NavBar />
      <form className="formContent">
        <div className="formTitle">상품 등록하기</div>
        <button className="formBtn" type="submit">
          등록
        </button>
        <InputImage title={"상품이미지"} placeholder={"이미지 등록 "} />
        <InputForm
          title={"상품명"}
          height={56}
          placeholder={"상품명을 입력해주세요"}
        />
        <InputForm
          title={"상품소개"}
          height={282}
          placeholder={"상품 소개를 입력해주세요"}
        />
        <InputForm
          title={"판매가격"}
          height={56}
          placeholder={"판매 가격을 입력해주세요"}
        />
        <InputForm
          title={"태그"}
          height={56}
          placeholder={"태그을 입력해주세요"}
        />
      </form>
    </>
  );
}

export default AddItemPage; // default export
