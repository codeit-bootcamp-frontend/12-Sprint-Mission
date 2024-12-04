import { getData } from '../api';
import AllItems from '../Components/AllItems/AllItems';
import BestItems from '../Components/BestItems/BestItems';
import Header from '../Components/Header/Header';
import './App.css';

const { list: bestItems } = await getData('favorite');
const { list: allItems } = await getData();

function App() {
  return (
    <>
      <Header />
      <BestItems items={bestItems} />
      <AllItems items={allItems} />
    </>
  );
}

export default App;
