import React, { useState } from "react";
import styles from "../../styles/addItem.module.css";
import AddItemForm from "./AddItemForm";
import AddImgForm from "./AddImgForm";
import AddTagForm from "./AddTagForm";

const AddItem: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    } else if (id === "description") {
      setDescription(value);
    } else if (id === "price") {
      setPrice(value);
    }
  };

  const isSubmitDisabled = !name || !description || !price || !tags.length;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h2 className={styles.h2}>상품 등록하기</h2>
          <button
            type="submit"
            className={styles.addItemBtn}
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
          onChange={handleChange}
        />
        <AddItemForm
          label="상품 소개"
          id="description"
          type="text"
          placeholder="상품 소개를 입력해주세요"
          isTextArea
          value={description}
          onChange={handleChange}
        />
        <AddItemForm
          label="판매가격"
          id="price"
          type="text"
          placeholder="판매가격을 입력해주세요"
          value={price}
          onChange={handleChange}
        />
        <AddTagForm tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
      </main>
    </form>
  );
};

export default AddItem;
