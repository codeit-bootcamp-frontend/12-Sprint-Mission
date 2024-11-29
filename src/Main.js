import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItem from "./pages/AddItemPage/AddItem.jsx";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<MarketPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
