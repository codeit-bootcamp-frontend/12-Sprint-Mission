import "./NavBar.css";

function NavBar({ handleOrder }) {
  const onClickOption = (e) => {
    handleOrder(e.target.value);
  };

  return (
    <nav className="nav">
      <h1 className="all-item__title">전체상품</h1>
      <input
        className="nav__search"
        placeholder="검색할 상품을 입력해주세요"
      ></input>
      <button className="nav__post">상품 등록하기</button>
      <select className="nav__select" onChange={onClickOption}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </nav>
  );
}

export default NavBar;
