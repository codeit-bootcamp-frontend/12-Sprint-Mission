// App.js

import { useEffect, useState } from 'react';
import { getData } from '../api';
import AllItems from '../Components/AllItems/AllItems';
import BestItems from '../Components/BestItems/BestItems';
import Header from '../Components/Header/Header';
import './App.css';

const { list: bestItems } = await getData('favorite');

function App() {
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [preOrder, setPreOrder] = useState(order);
  const [page, setPage] = useState(1);

  const handleChange = (orderBy) => {
    setOrder(orderBy);
  };

  const handLoadMore = () => {
    setPage(page + 1);
  };

  const load = async (orderQuery) => {
    const { list: nextItems } = await getData(orderQuery);
    if (orderQuery.page === 1) {
      setAllItems(nextItems);
    } else {
      setAllItems([...allItems, ...nextItems]);
    }
  };

  useEffect(() => {
    if (order !== preOrder) {
      load({ order });
    } else {
      load({ order, page });
    }
  }, [order, page]);

  return (
    <>
      <Header />
      <BestItems items={bestItems} />
      <AllItems
        items={allItems}
        onChange={handleChange}
        onLoadMore={handLoadMore}
      />
    </>
  );
}

export default App;








































// AllItems.js

import AllItemList from './AllItemList/AllItemList';
import './AllItems.css';

function AllItems({ items, onChange, onLoadMore }) {
  const allItemsChange = (e) => {
    onChange(e.target.value);
  };

  const handLoadMore = () => {
    onLoadMore();
  };

  return (
    <div className="allItems">
      <div className="container">
        <h2>전체 상품</h2>
        <div className="allItemsRight">
          <input type="text" placeholder="검색할 상품을 입력해주세요"></input>
          <button>상품 등록하기</button>
          <select
            className="orderSelect"
            name="order"
            onChange={allItemsChange}
          >
            <option value="recent">최신순</option>
            <option value="favorite">베스트순</option>
          </select>
        </div>
      </div>

      <ul className="itemList">
        {items.map((item, index) => {
          return <AllItemList key={item.id} item={item} index={index} />;
        })}
      </ul>
      <button className="loadMore" onClick={handLoadMore}>
        더보기
      </button>
    </div>
  );
}

export default AllItems;
