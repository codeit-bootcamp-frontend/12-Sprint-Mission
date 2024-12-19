import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage.jsx";
import SamplePage from "./pages/SamplePage/SamplePage";
import MainPage from "./pages/Main/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/items" element={<MarketPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
