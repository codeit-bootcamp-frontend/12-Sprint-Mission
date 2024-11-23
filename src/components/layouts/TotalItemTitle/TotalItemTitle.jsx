import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import searchIcon from '../../../assets/images/ic_search.png';

const TotalItemTitle = () => {
  const searchBar = (
    <div className="search-bar">
      <img src={searchIcon} alt="검색바" className="search-icon" />
      <span className="search-text">검색할 상품을 입력해주세요</span>
    </div>
  );
  return (
    <div className="total-item-title">
      <p className="total-item-title-keyword">전체 상품</p>
      {searchBar}
      <Link to="/addItem" className="register-item">
        상품 등록하기
      </Link>
      <Dropdown />
    </div>
  );
};

export default TotalItemTitle;
