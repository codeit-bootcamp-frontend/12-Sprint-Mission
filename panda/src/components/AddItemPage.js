
import "./AddItemPage.css";
import React, { useState, useEffect } from "react";


function AddItemPage() {

  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가

  const [productName, setProductName] = useState(""); // 상품명 상태
  const [productIntro, setProductIntro] = useState(""); // 상품 소개 상태
  const [productPrice, setProductPrice] = useState(""); // 판매가격 상태

  // 등록 버튼 활성화 여부를 체크하는 상태
  const [isFormValid, setIsFormValid] = useState(false);


  
  const handleBlur = (e) => {
    const value = e.target.value.trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
    }
    e.target.value = ''; // 입력 필드 초기화
  };

  // 태그 삭제
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // 이미지 파일 업로드 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (image) {
        setErrorMessage("이미지 등록은 최대 1개까지 가능합니다."); // 이미지가 이미 있는 경우 에러 메시지 설정
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); // 이미지 파일을 상태에 저장
          setErrorMessage(""); // 에러 메시지 초기화
        };
        reader.readAsDataURL(file); // 이미지 파일을 데이터 URL로 변환
      }
    }
  };
  
   // 입력 필드가 변경될 때마다 유효성 검사
   useEffect(() => {
    if (
      productName &&
      productIntro &&
      productPrice &&
      image &&
      tags.length > 0 // 태그가 하나 이상일 경우
    ) {
      setIsFormValid(true); // 모든 필드가 채워지면 버튼 활성화
    } else {
      setIsFormValid(false); // 하나라도 비어 있으면 버튼 비활성화
    }
  }, [productName, productIntro, productPrice, image, tags]);

  return (
    <div className="AddItem">
      <div className="AddItemUpload">
        <div className="AddItemUploadText">
          <p>상품 등록하기</p>
        </div>
        <div className={`AddItemUploadBtn ${isFormValid ? "active" : "inactive"}`}>
          <p>등록</p>
        </div>
      </div>

      <div className="AddItemContainer">
        <div className="AddItemImgContainer">
          <div className="AddItemText">
            <p>상품 이미지</p>
          </div>

          <div className="AddItemImg">
            {/* 이미지 업로드 버튼 */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="AddItemImgBtn"

            />
         

            {/* 선택된 이미지가 있을 경우 그 이미지를 바로 옆에 표시 */}
            {image && (
              <div className="AddItemImgAfter">
                <img src={image} alt="상품 이미지" className="SelectedImage" />
              </div>
            )}

            
          

          </div>
        </div>
        {/* 에러 메시지 표시 */}
        {errorMessage && (
              <div className="ErrorMessage">
                <p>{errorMessage}</p>
              </div>
        )}

        <div className="AddItemName">
          <div className="AddItemText">
            <p>상품명</p>
          </div>
          <input 
            type="text"
            placeholder="상품명을 입력해주세요"
            className="AddItemNameInput"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}>  
            
          </input>
        </div>

        <div className="AddItemIntro">
          <div className="AddItemText">
            <p>상품 소개</p>
          </div>

          <input 
            type="text"
            placeholder="상품 소개를 입력해주세요"
            className="AddItemIntroInput"
            value={productIntro}
            onChange={(e) => setProductIntro(e.target.value)}>  
          </input>
        </div>

        <div className="AddItemPrice">
          <div className="AddItemText">
            <p>판매가격</p>
          </div>
          <input 
            type="text"
            placeholder="판매 가격을 입력해주세요"
            className="AddItemPriceInput"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}>  
          </input>
        </div>

        <div className="AddItemTag">
          <div className="AddItemText">
            <p>태그</p>
          </div>
          <div className="AddItemTagInputContainer">
            <input 
              type="text"
              placeholder="태그를 입력해주세요"
              className="AddItemTagInput"
              onBlur={handleBlur}>  
            </input>
            <div className="AddItemTags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                  <button
                      className="removeTagButton"
                      onClick={() => removeTag(tag)}
                  >
                    X
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
