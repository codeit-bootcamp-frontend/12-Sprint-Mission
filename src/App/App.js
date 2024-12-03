import BestItems from '../BestItems/BestItems';
import Header from '../Header/Header';
import './App.css';

const res = await fetch(
  'https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite'
);
const { list: bestItems } = await res.json();

function App() {
  // const { list: items } = fetch(
  //   'https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite'
  // )
  //   .then((res) => res.json())
  //   .then((data) => data);

  // console.log(items);

  return (
    <>
      <Header />
      <BestItems items={bestItems} />
    </>
  );
}

export default App;
