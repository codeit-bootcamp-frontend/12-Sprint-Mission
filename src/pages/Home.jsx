import './Home.css';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Bestitem from '../components/Bestitem';
import Totalitem from '../components/Totalitem';
import items from '../mockdata.json';
import totalitems from '../totalitems_data.json';
import Itemtitle from '../components/Itemtitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import arrowLeft from '../assets/arrow_left.svg';
import arrowRight from '../assets/arrow_right.svg';

const Home = () => {
  const [sort, setSort] = useState('new');

  const onChangeSort = (e) => {
    setSort(e.target.value);
  };

  const getSortData = () => {
    return totalitems.toSorted((a, b) => {
      if (sort === 'new') {
        return Number(b.createdAt) - Number(a.createdAt);
      } else {
        return Number(b.favoriteCount) - Number(a.favoriteCount);
      }
    });
  };
  const sortData = getSortData();

  return (
    <div className="Home">
      <Nav />
      {/* 아래는 상품 */}
      <div className="item">
        <div className="item_title">
          <Itemtitle leftChild={'베스트 상품'} />
        </div>
        <Bestitem items={items} />
        <div className="item_title search">
          <Itemtitle
            leftChild={'전체 상품'}
            searchInput={<input placeholder="검색할 상품을 입력해주세요" />}
            searchBtn={
              <Link to="/additem">
                <Button text={'상품 등록하기'} type={'ItemAdd'} />
              </Link>
            }
            rightChild={
              <select onChange={onChangeSort}>
                <option value={'new'}>최신순</option>
                <option value={'like'}>좋아요순</option>
              </select>
            }
          />
        </div>
        <Totalitem totalitems={sortData} />
      </div>
      {/* 페이지네이션 영역 */}
      <div className="pagenation_box">
        <button className="page_button">
          <img src={arrowLeft} />
        </button>
        <button className="page_button active">1</button>
        <button className="page_button">2</button>
        <button className="page_button">3</button>
        <button className="page_button">4</button>
        <button className="page_button">5</button>
        <button className="page_button">
          <img src={arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Home;
