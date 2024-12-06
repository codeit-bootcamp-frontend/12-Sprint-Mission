import { useEffect, useState } from 'react';
import { getData } from '../api';
import AllItems from '../Components/AllItems/AllItems';
import BestItems from '../Components/BestItems/BestItems';
import Header from '../Components/Header/Header';
import './App.css';

const { list: bestItems } = await getData({ order: 'favorite' });

function App() {
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);

  const handleChange = (orderBy) => {
    setOrder(orderBy);
  };

  const handleLoadNext = () => {
    if (allItems.length < 10) {
      return;
    } else {
      setPage(page + 1);
    }
  };
  const handleLoadPre = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const itemLoad = async (orderQuery) => {
    const { list: nextItems } = await getData(orderQuery);
    setAllItems(nextItems);
  };

  useEffect(() => {
    itemLoad({ order, page });
  }, [order, page]);

  return (
    <>
      <Header />
      <BestItems items={bestItems} />
      <AllItems
        items={allItems}
        onChange={handleChange}
        onLoadNext={handleLoadNext}
        onLoadPre={handleLoadPre}
      />
    </>
  );
}

export default App;
