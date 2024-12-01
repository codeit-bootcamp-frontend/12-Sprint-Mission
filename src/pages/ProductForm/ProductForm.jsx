import React from "react";
import { useState } from "react";
import './ProductForm.css'
import FileInput from "./components/FileInput";
import TagInput from "./components/Taginput";

function ProductForm() {
    // 공통 state로 입력폼 만들기
    const [values, setVlues] = useState({
        title: '',
        description: '',
        price: '',
        imgFile: null,
    });

    const handleChange = (name, value) => {
        setVlues((prevValues) => ({
            ...prevValues, // 이전 상태를 복사
            [name]: value, // name에 해당하는 값을 업데이트
        }));
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target; // 이벤트 대상에서 name과 value를 추출
        handleChange(name, value);;
    };

    // 개별 state 입력폼 만들기
    // 1. input 값을 반영할 state 생성  
    // 2. input value={}로 state를
    // 2-1. 판매 가격은 숫자이므로 input에 type={number}추가, state값 변경 함수에 Number로 가져오기 및 입력 값이 숫자가 아닌 경우 0으로 return
    // 3. onChange 이벤트 핸들러에서는 state값을 변경하는 함수들을 호출
    // 3-1. React의 `onChange`는 입력값이 변경될 때마다 발생하지만, 바닐라 JS의 `change` 이벤트는 입력이 완료된 후(포커스를 벗어나고 다른 요소를 클릭했을 때) 발생!

    // 상품명
    // const [title, setTitle] = useState('');
    // const hanldeTitleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    // // 상품 소개
    // const [description, setDescription] = useState('');
    // const hanldeDescriptionChange = (e) => {
    //     setDescription(e.target.value);
    // }

    // // 판매 가격
    // const [price, setPrice] = useState(0);
    // const hanldePriceChange = (e) => {
    //     const nextPrice = Number(e.target.value) || 0;
    //     setPrice(nextPrice);
    // }

    // 등록 버튼
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('API를 통한 상품 등록은 추후 미션에서 적용합니다');
        console.log(values)
    };
    // 1. 등록버튼 handleSubmit 함수 만들어서, form태그에 onSubmit 프롭으로 넣어주기!
    // 1-1. <from>태그 안에 있는 <button>태그는 type 속성을 명시하지 않더라도, 기본적으로 type="submit"으로 간주
    // 1=2. <button>태그는 클릭시 폼이 제출됨과 동시에 페이지가 새로고침되므로 e.preventDefaul()로 기본 동작을 막아주기!

    const isFormValid = () => {
        return (
            values.title.trim() !== '' &&
            values.description.trim() !== '' &&
            values.price > 0
        );
    };

    return (
        <div className="product-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="product-form-top">
                    <p className="product-form-top__title">상품 등록하기</p>
                    <button className="product-form-top__button--submit" type="submit" disabled={!isFormValid()}>등록</button>
                </div>
                <FileInput name="imgFile" value={values.imgFile} onChange={handleChange}></FileInput>
                <div className="product-form__item">
                    <label htmlFor="productTitle" className="product-form__item--label">상품명</label>
                    <input id="productTitle" className="product-form__item--input" name="title" value={values.title} onChange={handleInputChange} placeholder="상품명을 입력해주세요."></input>
                </div>
                <div className="product-form__item">
                    <label htmlFor="productDescription" className="product-form__item--label">상품 설명</label>
                    <textarea id="productDescription" rows="10" className="product-form__item--input" name="description" value={values.description} onChange={handleInputChange} placeholder="상품 소개를 입력해주세요"></textarea>
                </div>
                <div className="product-form__item">
                    <label htmlFor="productPrice" className="product-form__item--label">상품 가격</label>
                    <input id="productPrice" className="product-form__item--input" type="number" min="0" name="price" value={values.price} onChange={handleInputChange} placeholder="판매 가격을 입력해주세요"></input>
                </div>
                <TagInput></TagInput>
            </form>
        </div>
    );


}

export default ProductForm;



