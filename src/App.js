import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header';
import MarketPage from './pages/MarketPage/MarketPage';
import addItemPage from './pages/addItemPage/addItemPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/items" element={<MarketPage />} />
        <Route path="/addItem" element={<addItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
