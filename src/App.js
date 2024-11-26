import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import MainPage from "./pages/MainPage";
import UsedMarketPage from "./pages/UsedMarketPage";
import PostProductPage from "./pages/PostProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<UsedMarketPage />} />
        <Route path="/additem" element={<PostProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
