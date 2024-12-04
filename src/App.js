import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage/HomePage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <div className="withHeader">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
