import "../AddItemPage/AddItemPage.scss";
import InputForm from "./components/InputForm";
import InputImage from "./components/InputImage";
import InputTag from "./components/InputTag";
import { useState } from "react";

function AddItemPage() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [tags, setTags] = useState([]);

  const isSubmitDisabled =
    !values.title || !values.description || !values.price || tags.length === 0;

  console.log(isSubmitDisabled);

  return (
    <>
      <form
        className="formContent"
        action="https://panda-market-api.vercel.app/products"
      >
        <div className="formTitle">상품 등록하기</div>
        <button
          className={`formBtn ${isSubmitDisabled ? "disabled" : "active"}`} // 버튼 활성화/비활성화
          type="submit"
          disabled={isSubmitDisabled} // 조건에 따라 버튼 비활성화
        >
          등록
        </button>
        <InputImage title={"상품이미지"} placeholder={"이미지 등록 "} />
        <InputForm
          title={"상품명"}
          value={values.title}
          height={56}
          placeholder={"상품명을 입력해주세요"}
          onChange={(e) => setValues({ ...values, title: e.target.value })} // title 값 변경
        />
        <InputForm
          title={"상품소개"}
          value={values.description}
          height={282}
          placeholder={"상품 소개를 입력해주세요"}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          } // description 값 변경
        />
        <InputForm
          title={"판매가격"}
          value={values.price}
          height={56}
          placeholder={"판매 가격을 입력해주세요"}
          type="number"
          onChange={(e) => setValues({ ...values, price: e.target.value })} // price 값 변경
        />
        <InputTag
          tags={tags}
          setTags={setTags}
          title={"태그"}
          placeholder={"태그를 입력해주세요"}
          type="string"
        />
      </form>
    </>
  );
}

export default AddItemPage;
