import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import searchIcon from '../../../assets/images/ic_search.png';
import styles from './TotalItemTitle.module.css';

const TotalItemTitle = () => {
  const searchBar = (
    <div className={styles['search-bar']}>
      <label htmlFor="search-content">
        <img src={searchIcon} alt="검색바" className={styles['search-icon']} />
      </label>
      <input
        className={styles['search-text']}
        type="text"
        id="search-content"
        name="search-content"
        placeholder="검색할 상품을 입력해주세요"
      ></input>
    </div>
  );
  return (
    <div className={styles['total-item-title']}>
      <p className={styles['total-item-title-keyword']}>전체 상품</p>
      {searchBar}
      <Link to="/addItem" className={styles['register-item']}>
        상품 등록하기
      </Link>
      <Dropdown />
    </div>
  );
};

export default TotalItemTitle;
