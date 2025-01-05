import { useState } from "react";
import styled from "styled-components";
import ImageUpload from "@/components/UI/ImageUpload";
import InputItem from "@/components/UI/InputItem";
import InputTag from "@/components/UI/InputTag";

const formatPrice = (value: string) => {
  if (!value) return "";
  return parseInt(value.replace(/,/g, ""), 10).toLocaleString();
};

const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  margin-bottom: 7rem;
  padding: 0 2rem;

  @media (max-width: 1199px) {
    margin: 0 2.4rem 7rem 2.4rem;
  }

  @media (max-width: 767px) {
    margin: 0 1.5rem 7rem 1.5rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 0;

  @media (max-width: 1199px) {
    padding-top: 1.6rem;
    padding-bottom: 2.4rem;
  }

  @media (max-width: 767px) {
    padding: 2.4rem 0;
  }
`;

const AddItemButton = styled.button<{ disabled: boolean }>`
  width: 7.4rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  color: var(--secondary-100);
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.6rem;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue))) {
      setPrice(rawValue);
    }
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const isSubmitDisabled =
    !name.trim() || !description.trim() || !price.trim() || !tags.length;

  return (
    <Container>
      <form>
        <TitleSection>
          <h1 className="sectionTitle">상품 등록하기</h1>
          <AddItemButton type="submit" disabled={isSubmitDisabled}>
            등록
          </AddItemButton>
        </TitleSection>

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
    </Container>
  );
}

export default AddItemPage;
