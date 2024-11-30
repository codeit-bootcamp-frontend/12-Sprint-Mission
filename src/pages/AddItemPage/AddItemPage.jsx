import { useState } from "react";
import ImageUpload from "../../components/UI/ImageUpload";
import InputItem from "../../components/UI/InputItem";
import "./AddItemPage.css";
import InputTag from "../../components/UI/InputTag";

const formatPrice = (value) => {
  if (!value) return "";
  return parseInt(value.replace(/,/g, ""), 10).toLocaleString();
};

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(rawValue)) {
      setPrice(rawValue);
    }
  };

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const isSubmitDisabled =
    !name.trim() || !description.trim() || !price.trim() || !tags.length;

  return (
    <div className="container">
      <form>
        <div className="titleSection">
          <h1 className="sectionTitle">상품 등록하기</h1>
          <button
            type="submit"
            className="addItemButton button"
            disabled={isSubmitDisabled}
          >
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
            value={formatPrice(price)}
            onChange={handlePriceChange}
            placeholder="판매 가격을 입력해 주세요"
          />

          <InputTag tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
