import './Home.css';
import Nav_logo from '../assets/nav_panda_logo_img.png';
import Nav_user from '../assets/nav_user_img.png';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Bestitem from '../components/Bestitem';
import Totalitem from '../components/Totalitem';
import items from '../mockdata.json';
import totalitems from '../totalitems_data.json';
import Itemtitle from '../components/Itemtitle';
import Pagenation from '../components/Pagenation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  console.log(getSortData());
  const sortData = getSortData();

  return (
    <div className="Home">
      <Nav
        leftChild={<img src={Nav_logo} />}
        center={
          <div className="nav_button">
            <Button text={'자유게시판'} />
            <Button text={'중고마켓'} type={'nav_activate'} />
          </div>
        }
        rightChild={<img src={Nav_user} />}
      />
      {/* 아래는 상품 */}
      <form>
        <div className="item">
          <div className="item_title">
            <Itemtitle leftChild={'베스트 상품'} />
          </div>
          <Bestitem items={items} />
          <div className="item_title">
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
        <div>
          <Pagenation />
        </div>
      </form>
    </div>
  );
};

export default Home;
