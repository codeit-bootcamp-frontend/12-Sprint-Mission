import { useEffect, useRef, useState } from "react";
import Header from "../section/Header";

export default function ProductRegPage() {

  //이미지 상태관리
  const [productImg, setProductImg] = useState(null);
  const fileInputRef = useRef(null);

  //이미지 업로드 에러메세지 상태관리
  const [error, setError] = useState('');

  //버튼 활성화, 비활성화 상태관리 
  const [btnActive, setBtnActive] = useState(true);

  //상품명 입력 상태관리
  const [productNameValue, setProductNameValue] = useState('');

  //상품소개 입력 상태관리
  const [productIntroductionValue, setProductIntroductionValue] = useState('');

  //판매가격 입력 상태관리
  const [ProductPriceValue, setProductPriceValue] = useState('');

  //태그 입력 상태관리
  const [ProductTagValue, setProductTagValue] = useState('');

  //이미지 업로드 함수
  function handleImgUpload(e) {

    const file = e.target.files[0];

    if (productImg) {
      setError('*이미지 등록은 최대 1개까지 가능합니다.');
      return;
    }

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProductImg(imgUrl);
      setError('');
    }

  }

  //이미지 삭제 함수
  function handelImgDelete() {

    if (productImg && fileInputRef.current) {
      setProductImg(null);
      setError('');
      fileInputRef.current.value = '';
    }

  }

  //input value 저장 함수
  function handleInputValue(e) {

    const { id, value } = e.target;

    if (id === 'productName') {
      setProductNameValue(value);
    } else if (id === 'productIntroduction') {
      setProductIntroductionValue(value);
    } else if (id === 'productPrice') {
      setProductPriceValue(value);
    } else if (id === 'productTag') {
      setProductTagValue(value);
    }

  }

  //버튼 활성화, 비활성화 조건 체크
  useEffect(() => {
    if (
      productNameValue.length > 0 &&
      productIntroductionValue.length > 0 &&
      ProductPriceValue.length > 0 &&
      ProductTagValue.length > 0
    ) {
      setBtnActive(false);
    } else {
      setBtnActive(true);
    }
  }, [productNameValue, productIntroductionValue, ProductPriceValue, ProductTagValue]);

  return (
    <>
      <Header />
      <main id="sub" className="subProductReg">
        <div className="contentBox">
          <div className="productRegWrap">
            <div className="container">
              <div className="productRegBox">

                <h3>
                  상품등록하기
                </h3>

                <form>
                  <div className="formBox">
                    <h4>
                      상품 이미지
                    </h4>

                    <div className="LayoutBox">
                      <div className="inputFileBox">
                        <label htmlFor="file">
                          <span>이미지 등록</span>
                        </label>
                        <input
                          id="file"
                          type="file"
                          onChange={handleImgUpload}
                          ref={fileInputRef}
                          className="blind"
                        />
                        {error && <p className="errorText">{error}</p>}
                      </div>

                      {
                        productImg && (
                          <div className="productUploadeImg">
                            <img
                              src={productImg}
                              alt=""
                            />
                            <button
                              className="delBtn"
                              type="button"
                              onClick={handelImgDelete}
                            >
                              <span className="blind">상품 이미지 삭제</span>
                            </button>
                          </div>
                        )
                      }

                    </div>
                  </div>

                  <div className="formBox">
                    <h4>
                      상품명
                    </h4>
                    <div className="inputTextBox">
                      <label htmlFor="productName" className="blind">
                        상품명
                      </label>
                      <input
                        id="productName"
                        type="text"
                        placeholder="상품명을 입력해주세요"
                        value={productNameValue}
                        onChange={handleInputValue}
                      />
                    </div>
                  </div>

                  <div className="formBox">
                    <h4>
                      상품소개
                    </h4>
                    <div className="textAreaBox">
                      <label htmlFor="productIntroduction" className="blind">
                        상품소개
                      </label>
                      <textarea
                        id="productIntroduction"
                        placeholder="상품 소개를 입력해주세요"
                        value={productIntroductionValue}
                        onChange={handleInputValue}
                      />
                    </div>
                  </div>

                  <div className="formBox">
                    <h4>
                      판매가격
                    </h4>
                    <div className="inputTextBox">
                      <label htmlFor="productPrice" className="blind">
                        판매가격
                      </label>
                      <input
                        id="productPrice"
                        type="text"
                        placeholder="판매 가격을 입력해주세요"
                        value={ProductPriceValue}
                        onChange={handleInputValue}
                      />
                    </div>
                  </div>

                  <div className="formBox">
                    <h4>
                      태그
                    </h4>
                    <div className="inputTextBox">
                      <label htmlFor="productTag" className="blind">
                        태그
                      </label>
                      <input
                        id="productTag"
                        type="text"
                        placeholder="태그를 입력해주세요"
                        value={ProductTagValue}
                        onChange={handleInputValue}
                      />
                    </div>
                  </div>

                  <button className="addBtn" disabled={btnActive}>
                    등록
                  </button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )

}
