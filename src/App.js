import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage/HomePage";
import MarketPage from "./pages/MarketPage/MarketPage";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
