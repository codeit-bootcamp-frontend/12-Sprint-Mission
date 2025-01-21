import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { addItem } from "api/api";
import ContentWrap from "../components/ContentWrap";
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

// 타입 설정
type FormValues = {
  imgFile: File | null;
  title: string;
  content: string;
  price: number;
  tag: string;
};

function AddItem() {
  const [values, setValues] = useState<FormValues>({
    imgFile: null,
    title: "",
    content: "",
    price: 0,
    tag: "",
  });

  const [tags, setTags] = useState<string[]>([]);

  // 텍스트 입력 중인 상태인지 아닌지 추적함
  const [isComposing, setIsComposing] = useState(false);

  const handleChange = (name: string, value: string | File | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageUrl = values.imgFile ? URL.createObjectURL(values.imgFile) : "";
    const formData = {
      images: imageUrl ? [imageUrl] : [],
      tags: tags,
      price: values.price,
      description: values.content,
      name: values.title,
    };
    try {
      const result = await addItem(formData);
      console.log("상품이 성공적으로 추가되었습니다:", result);
    } catch (error) {
      console.error("상품 추가 실패:", error);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();

      const trimmedTag = values.tag.trim();
      if (trimmedTag === "") return;

      if (tags.includes(trimmedTag)) {
        alert("이미 추가된 태그입니다.");
        return;
      }
      setTags((prevTag) => [...prevTag, trimmedTag]);
      setValues((prevValues) => ({ ...prevValues, tag: "" }));
    }
  };
  const handleRemoveTag = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  // 입력 중인 텍스트가 아직 완성되지 않았을 때 발생하는 입력 과정에 대해 관리하기 위한 코드 (한국어 입력시 필요)
  const handleCompositionStart = () => {
    setIsComposing(true);
  };
  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  // 필수 입력값을 제대로 채웠는지 확인하는 함수
  const isValid = (values: FormValues, tags: string[]): boolean => {
    return (
      values.title.trim() !== "" &&
      values.content.trim() !== "" &&
      values.price > 0 &&
      tags.length > 0
    );
  };

  useEffect(() => {}, [values, tags]);

  return (
    <ContentWrap>
      <AddForm id="submitForm" onSubmit={handleSubmit}>
        <FormTopSection>
          <SectionTitle>상품 등록하기</SectionTitle>
          <SubmitButton type="submit" disabled={!isValid(values, tags)}>
            등록
          </SubmitButton>
        </FormTopSection>
        <FileInput
          name="imgFile"
          value={values.imgFile ?? null}
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
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
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
    </ContentWrap>
  );
}

export default AddItem;
