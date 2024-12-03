import React, { useState } from "react";
import "./AddItem.css";
import AddItemForm from "../components/AddItemForm";
import AddImgForm from "../components/AddImgForm";
import AddTagForm from "../components/AddTagForm";

function AddItem() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const isSubmitDisabled = !name || !description || !price || !tags.length;

  return (
    <form onSubmit={handleSubmit}>
      <main>
        <div className="title">
          <h2>상품 등록하기</h2>
          <button
            type="submit"
            className="additem-btn"
            disabled={isSubmitDisabled}
          >
            등록
          </button>
        </div>
        <AddImgForm label="상품 이미지" />
        <AddItemForm
          label="상품명"
          id="name"
          type="text"
          placeholder="상품명을 입력해주세요"
          value={name}
          onChange={handleNameChange}
        />
        <AddItemForm
          label="상품 소개"
          id="description"
          type="text"
          placeholder="상품 소개를 입력해주세요"
          isTextArea
          value={description}
          onChange={handleDescriptionChange}
        />
        <AddItemForm
          label="판매가격"
          id="price"
          type="text"
          placeholder="판매가격을 입력해주세요"
          value={price}
          onChange={handlePriceChange}
        />
        <AddTagForm tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
      </main>
    </form>
  );
}

export default AddItem;
