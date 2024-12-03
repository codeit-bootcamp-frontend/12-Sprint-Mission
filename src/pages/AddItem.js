import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import FileInput from "../components/FileInput";
import SectionTitle from "../components/SectionTitle";
import icClose from "../assets/ic_X.svg";

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FormTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubmitButton = styled.button`
  padding: 12px 23px;
  background-color: var(--primary-color-100);
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--gray-scale-0);
  border-radius: 8px;
  &:hover {
    background-color: var(--primary-color-200);
  }
  &:active {
    background-color: var(--primary-color-300);
  }
  &:disabled {
    background-color: var(--gray-scale-400);
  }
`;

const Label = styled.label`
  line-height: 26px;
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--gray-scale-800);
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const input = css`
  padding: 24px;
  border: none;
  border-radius: 12px;
  background-color: var(--gray-scale-100);
  font-size: 16px;
  color: var(--gray-scale-800);
  &::placeholder {
    color: var(--gray-scale-400);
  }
`;

const Input = styled.input`
  ${input};
`;

const TextArea = styled.textarea`
  ${input};
  height: 282px;
`;

const TagsWrap = styled.div`
  display: flex;
  gap: 12px;
`;

const TagBox = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 16px;
  background-color: var(--gray-scale-100);
  border-radius: 26px;
`;

const RemoveTagButton = styled.button`
  height: 24px;
  cursor: pointer;
`;

function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
    title: "",
    content: "",
    price: "",
    tag: "",
  });

  const [tags, setTags] = useState([]);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...values, tags };
    console.log("폼 제출 데이터:", formData);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && values.tag.trim() !== "") {
      e.preventDefault();

      if (tags.includes(values.tag.trim())) {
        alert("이미 추가된 태그입니다.");
        return;
      }
      setTags((prevTag) => [...prevTag, values.tag.trim()]);
      setValues((prevValues) => ({ ...prevValues, tag: "" }));
    }
  };

  const handleRemoveTag = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const { title, content, price } = values;
    const isValid =
      title.trim() !== "" &&
      content.trim() !== "" &&
      price > 0 &&
      tags.length > 0;
    setIsButtonEnabled(isValid);
  }, [values, tags]);

  return (
    <>
      <AddForm id="submitForm" onSubmit={handleSubmit}>
        <FormTopSection>
          <SectionTitle>상품 등록하기</SectionTitle>
          <SubmitButton type="submit" disabled={!isButtonEnabled}>
            등록
          </SubmitButton>
        </FormTopSection>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        <InputWrap>
          <Label htmlFor="">상품명</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={values.title}
            onChange={handleInputChange}
            placeholder="상품명을 입력해주세요"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">상품 소개</Label>
          <TextArea
            id="content"
            name="content"
            value={values.content}
            onChange={handleInputChange}
            placeholder="상품 소개를 입력해주세요"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">판매가격</Label>
          <Input
            id="price"
            type="number"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            placeholder="판매가격을 입력해주세요"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">태그</Label>
          <Input
            id="tag"
            type="text"
            name="tag"
            value={values.tag}
            placeholder="태그를 입력해주세요"
            onChange={handleInputChange}
            onKeyDown={handleTagKeyDown}
          />
          {tags && (
            <TagsWrap>
              {tags.map((tag, index) => (
                <TagBox key={index}>
                  #{tag}
                  <RemoveTagButton
                    type="button"
                    onClick={() => handleRemoveTag(index)}
                  >
                    <img src={icClose} alt="태그 삭제" />
                  </RemoveTagButton>
                </TagBox>
              ))}
            </TagsWrap>
          )}
        </InputWrap>
      </AddForm>
    </>
  );
}

export default AddItem;
