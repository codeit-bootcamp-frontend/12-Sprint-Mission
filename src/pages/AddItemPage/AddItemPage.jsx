import "./AddItemPage.css";

const AddItemPage = () => {
  return (
    <div>
      <form className="addItemContainer">
        <div className="addItemHeader">
          <h1 className="headerTitle">상품 등록하기</h1>
          <button className="addItemBtn" disabled>
            등록
          </button>
        </div>
        <div className="inputBox image">
          <label className="inputLabel">상품 이미지</label>
          <input className="input inputImg" placeholder="이미지 등록" />
        </div>
        <div className="inputBox">
          <label className="inputLabel">상품명</label>
          <input className="input" placeholder="상품명을 입력해주세요" />
        </div>
        <div className="inputBox textarea">
          <label className="inputLabel">상품 소개</label>
          <input className="input textarea" placeholder="상품 소개를 입력해주세요" />
        </div>
        <div className="inputBox image">
          <label className="inputLabel">판매가격</label>
          <input className="input" placeholder="판매 가격을 입력해주세요" />
        </div>
        <div className="inputBox image">
          <label className="inputLabel">태그</label>
          <input className="input" placeholder="태그를 입력해주세요" />
        </div>
      </form>
    </div>
  );
};

export default AddItemPage;
