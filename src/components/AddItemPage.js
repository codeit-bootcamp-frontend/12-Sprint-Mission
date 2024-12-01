import React, { useState } from "react";
import "./AddItemPage.css";
import FileInput from "./FileInput";
import InputItem from "./InputItem";
import TagInput from "./TagInput";
import "../styles/global.css";

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const isSubmitDisabled = !name || !description || !price;

  return (
    <div className="container">
      <form>
        <div className="TitleSection">
          <h1 className="SectionTitle">상품 등록하기</h1>
          <button
            className="RegisterButton"
            type="submit"
            disabled={isSubmitDisabled}
          >
            등록
          </button>
        </div>

        <div className="InputSection">
          <FileInput title="상품 이미지" />

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
            isTextArea={true}
          />

          <InputItem
            id="price"
            label="판매 가격"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="판매 가격을 입력해 주세요"
          />

          <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
