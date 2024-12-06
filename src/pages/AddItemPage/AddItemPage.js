import { useState } from "react";
import Header from "../../components/ui/Header/Header";
import "./AddItemPage.css";
import ImageUpload from "../../components/ui/Input/ImageUpload";
import InputItem from "../../components/ui/Input/InputItem";
import TagInput from "../../components/ui/Input/TagInput";

function AddItemPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: null,
    tags: [],
  });

  const { name, description, price, tags } = formValues;

  const onAddTag = (tag) => {
    if (!tags.includes(tag)) {
      setFormValues((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const onRemoveTag = (tagToRemove) => {
    setFormValues((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const isFormValid = name && description && price && tags.length;

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="additem-page">
      <Header />
      <form className="additem-page-wrapper">
        <div className="additem-page-title-section">
          <h2 className="additem-title">상품 등록하기</h2>
          <button type="submit" className="add-button" disabled={!isFormValid}>
            등록
          </button>
        </div>
        <ImageUpload title="상품 이미지" />
        <InputItem
          id="name"
          title="상품명"
          value={name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="상품명을 입력해주세요"
        />
        <InputItem
          id="description"
          title="상품 소개"
          value={description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="상품 소개를 입력해주세요"
          isTextArea
        />
        <InputItem
          id="price"
          title="판매가격"
          value={price}
          onChange={(e) => handleInputChange("price", e.target.value)}
          placeholder="판매 가격을 입력해주세요"
        />
        <TagInput
          id="tag"
          title="태그"
          placeholder="태그를 입력해주세요"
          tags={tags}
          onAddTag={onAddTag}
          onRemoveTag={onRemoveTag}
        />
      </form>
    </div>
  );
}

export default AddItemPage;
