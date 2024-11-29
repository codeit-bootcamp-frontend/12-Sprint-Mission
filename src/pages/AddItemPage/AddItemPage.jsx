import { useState } from "react";
import ImageUpload from "../../components/UI/ImageUpload";
import InputItem from "../../components/UI/InputItem";
import "./AddItemPage.css";

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="container">
      <form>
        <div className="titleSection">
          <h1 className="sectionTitle">상품 등록하기</h1>
          <button type="submit" className="addItemButton button">
            등록
          </button>
        </div>

        <div className="inputSection">
          <ImageUpload title="상품 이미지" />

          <InputItem
            id="name"
            label="상품명"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="상품명을 입력해 주세요"
          />

          <InputItem
            id="description"
            label="상품 소개"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="상품 소개를 입력해 주세요"
            isTextArea
          />

          <InputItem
            id="price"
            label="판매 가격"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="판매 가격을 입력해 주세요"
          />
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
