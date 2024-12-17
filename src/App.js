import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketHeader from "./components/Header/MarketHeader";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage.jsx";
import HomePage from "./pages/HomePage/HomePage";
import SamplePage from "./pages/SamplePage/SamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/items" element={<MarketPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
