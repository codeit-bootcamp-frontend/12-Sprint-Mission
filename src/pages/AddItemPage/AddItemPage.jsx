import { useState } from "react";
import "./AddItemPage.css";
import FileInput from "./FileInput";

const AddItemPage = () => {
  const [values, setValues] = useState({
    itemName: "",
    itemPrice: 0,
    itemDesc: "",
    tag: "",
    imgFile: null,
  });
  const [canSubmit, setCanSubmit] = useState(true);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
    setCanSubmit(isSubmitDisabled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // disable가 true이면 비활성화 false이면 활성화된다. 값을 전부 입력하면 false를 전달해줘야한다.
  const isSubmitDisabled = !(values.itemName && values.itemDesc && values.itemPrice && values.tag);

  return (
    <div>
      <form className="addItemContainer">
        <div className="addItemHeader">
          <h1 className="headerTitle">상품 등록하기</h1>
          <button className={`addItemBtn ${canSubmit ? "" : "active"}`} onSubmit={handleSubmit} disabled={canSubmit}>
            등록
          </button>
        </div>
        <div className="inputBox image">
          <label className="inputLabel">상품 이미지</label>
          <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
        </div>
        <div className="inputBox">
          <label className="inputLabel">상품명</label>
          <input
            name="itemName"
            value={values.itemName}
            onChange={handleInputChange}
            className="input"
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className="inputBox textarea">
          <label className="inputLabel">상품 소개</label>
          <textarea
            name="itemDesc"
            value={values.itemDesc}
            onChange={handleInputChange}
            className="input textarea"
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className="inputBox image">
          <label className="inputLabel">판매가격</label>
          <input
            name="itemPrice"
            value={values.itemPrice}
            onChange={handleInputChange}
            className="input"
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className="inputBox image">
          <label className="inputLabel">태그</label>
          <input
            name="tag"
            value={values.tag}
            onChange={handleInputChange}
            className="input"
            placeholder="태그를 입력해주세요"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItemPage;
