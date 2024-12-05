import { useEffect, useState } from 'react';
import { getData } from '../api';
import AllItems from '../Components/AllItems/AllItems';
import BestItems from '../Components/BestItems/BestItems';
import Header from '../Components/Header/Header';
import './App.css';

const { list: bestItems } = await getData('favorite');
// const { list: allItems } = await getData();

function App() {
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');

  const handleChange = (orderQuery) => {
    setOrder(orderQuery);
  };

  const load = async (order) => {
    const { list: nextItems } = await getData(order);
    setAllItems(nextItems);
  };

  useEffect(() => {
    load(order);
  }, [order]);

  return (
    <>
      <Header />
      <BestItems items={bestItems} />
      <AllItems items={allItems} onChange={handleChange} />
    </>
  );
}

export default App;
