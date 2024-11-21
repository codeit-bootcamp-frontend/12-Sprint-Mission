import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import MarketPage from "./pages/MarketPage/MarketPage";
import Header from "./components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <div>
        <Routes>
          <Route path="items" element={<MarketPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
