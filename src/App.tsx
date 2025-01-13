import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import ProductRegPage from './pages/ProductRegPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ProductListPage />} />
        <Route path='/additem' element={<ProductRegPage />} />
        <Route path='/items/:productId' element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
