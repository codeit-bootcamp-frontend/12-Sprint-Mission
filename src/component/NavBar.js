function NavBar({ handleOrder }) {
  const onClickOption = (e) => {
    handleOrder(e.target.value);
  };

  return (
    <div>
      <h1>전체상품</h1>
      <input placeholder="검색할 상품을 입력해주세요"></input>
      <button>상품 등록하기</button>
      <select onChange={onClickOption}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
}

export default NavBar;
