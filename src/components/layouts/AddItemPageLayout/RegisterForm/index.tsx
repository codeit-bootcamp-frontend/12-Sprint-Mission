import styled from 'styled-components';
import { useCallback, useEffect, useState, useRef } from 'react';
import RegisterTitle from './RegisterTitle';
import RegisterImg from './RegisterImg';
import RegisterTags from './RegisterTags';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 70px auto 0;
  width: 90%;
  max-width: 1200px;
  @media (max-width: 500px) {
    margin-top: 130px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid var(--gray100);
  border-radius: 12px;
  padding-left: 16px;
  background-color: var(--gray100);
  height: 56px;
  font-size: 16px;

  font-family: Pretendard, sans-serif;
  &::placeholder {
    color: var(--gray400);
  }
`;

const Textarea = styled.textarea`
  border: 1px solid var(--gray100);
  border-radius: 12px;
  padding: 16px 0 0 16px;
  height: 300px;
  background-color: var(--gray100);
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  resize: none;
  &::placeholder {
    color: var(--gray400);
  }
`;

const WarningMessage = styled.p`
  color: #f74747;
  font-size: 16px;
  font-weight: 400;
`;

const RegisterForm = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isImg, setIsImg] = useState(false);
  const [tags, setTags] = useState([]);

  const [form, setForm] = useState({
    name: '',
    price: '',
  });

  const fileInputRef = useRef(null);

  const checkValid = useCallback(() => {
    const validResult = form.name.trim() !== '' && form.price > 0;
    setIsValid(validResult);
  }, [form.name, form.price]);

  const inputChangeHandler = (e) => {
    const { value, name: eName } = e.target;
    const trimValue = value.trim();
    e.preventDefault();
    if (eName === 'item-price') {
      let num = Number(value.replace(/,/g, ''));
      console.log(num);
      if (isNaN(num) || num === 0) num = '';
      if (num > Math.pow(10, 9)) num = Math.pow(10, 9);
      setForm((prevForm) => ({
        ...prevForm,
        price: num,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        name: trimValue,
      }));
    }
  };

  const isExistArray = (element, elements) => {
    return elements.some((prevElement) => element === prevElement);
  };

  const keydownHandler = (e) => {
    const value = e.target.value;
    //엔터 혹은 스페이스바
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      //중복된거 있으면 태그 추가 막기
      if (isExistArray(value, tags)) return;
      setTags((prevTags) => {
        e.target.value = '';
        return [value, ...prevTags];
      });
    }
  };

  const preventSubmit = (e) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  useEffect(() => {
    checkValid();
  }, [checkValid]);

  return (
    <Form>
      <RegisterTitle isValid={isValid} />
      <Label>상품 이미지</Label>
      <RegisterImg imgPreview={imgPreview} setImgPreview={setImgPreview} fileInputRef={fileInputRef} setIsImg={setIsImg} />
      {isImg && <WarningMessage>*이미지 등록은 최대 1개까지 가능합니다.</WarningMessage>}
      <Label htmlFor='item-name'>상품명</Label>
      <Input id='item-name' name='item-name' type='text' placeholder='상품명을 입력해주세요' onChange={inputChangeHandler} onKeyDown={preventSubmit} />
      <Label htmlFor='item-explain'>상품 소개</Label>
      <Textarea id='item-explain' name='item-explain' placeholder='상품 소개를 입력해주세요' />
      <Label htmlFor='item-price'>판매 가격</Label>
      <Input id='item-price' name='item-price' type='text' placeholder='판매 가격을 입력해주세요' value={form.price.toLocaleString()} onChange={inputChangeHandler} onKeyDown={preventSubmit} />
      <Label htmlFor='tag'>태그</Label>
      <Input id='tag' name='tag' type='text' placeholder='태그를 입력해주세요' onKeyDown={keydownHandler} />
      <RegisterTags tags={tags} setTags={setTags} />
    </Form>
  );
};

export default RegisterForm;
