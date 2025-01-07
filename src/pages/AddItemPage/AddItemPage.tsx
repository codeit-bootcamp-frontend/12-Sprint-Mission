import React, { FormEvent, useState } from "react";
import FileInput from "./FileInput";
import InputItem from "./InputItem";
import TagInput from "./TagInput";
import "../../styles/global.css";
import "./AddItemPage.css";

const AddItemPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  // 중복 등록을 막기 위함
  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setPrice(value);
    }
  };

  // form 제출 버튼 활성화
  const isSubmitDisabled = !name || !description || !price || !tags.length;

  // 제출 로직
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="addItemPageContainer">
        <form onSubmit={handleSubmit}>
          <div className="titleSection">
            <h1 className="sectionTitle">상품 등록하기</h1>
            <button
              className="registerButton"
              type="submit"
              disabled={isSubmitDisabled}
            >
              등록
            </button>
          </div>

          <div className="inputSection">
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
              onChange={handlePriceChange}
              placeholder="판매 가격을 입력해 주세요"
            />

            <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
