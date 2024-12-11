import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import ItemsPage from "./page/ItemsPage";
import AddItemPage from "./page/AddItemPage";
import FreeBoardPage from "./page/FreeBoardPage";
import ProductDetailPage from "./page/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/freeboard" element={<FreeBoardPage />} />
        <Route path="/ProductDetail/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
