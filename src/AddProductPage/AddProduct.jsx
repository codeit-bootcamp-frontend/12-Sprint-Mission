import "./AddProduct.css";

function AddProductPage() {
  return (
    <div>
      <div className="add-item">
        <h2>상품 등록하기</h2>
        <button className="add-item-btn">등록</button>
      </div>
      <div id="product-container">
        <p>상품 이미지</p>
        <input className="add-item-img" type="file" />
      </div>
      <div id="product-container">
        <p>상품명</p>
        <input
          className="add-item-name"
          type="text"
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div id="product-container">
        <p>상품 소개</p>
        <textarea
          className="add-item-description"
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div id="product-container">
        <p>판매가격</p>
        <input
          className="add-item-price"
          type="text"
          placeholder="판매 가격을 주세요"
        />
      </div>
      <div id="product-container">
        <p>태그</p>
        <input
          className="add-item-tag"
          type="text"
          placeholder="태그를 입력해주세요"
        />
      </div>
    </div>
  );
}

export default AddProductPage;
