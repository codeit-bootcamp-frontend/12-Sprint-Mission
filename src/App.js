import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MarketPage from "./MarketPage/MarketPage";
import Navigation from "./Nav_bar/Navigation";
import AddProductPage from "./AddProductPage/AddProduct";
import NoticeBoardPage from "./NoticeBoardPage/NoticeBoardPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="main-container">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddProductPage />} />
          <Route path="noticeboard" element={<NoticeBoardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
