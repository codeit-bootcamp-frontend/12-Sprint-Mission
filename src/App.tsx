import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react"; 
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import Header from "./components/Layout/Header";
import ItemPage from "./pages/ItemPage/ItemPage";

function App() {
  return (
    <BrowserRouter>
      {/* Global Navigation Bar */}
      <Header />

      <div className="withHeader">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="items" element={<MarketPage />} />
          {/* 
            동적 라우팅 (Dynamic Routing)
            - `:` 뒤에 상품 아이디를 `path parameter`로 추가해주어 각 상품의 상세 페이지를 생성할 수 있어요.
            - 해당 페이지의 컴포넌트 내에서 useParams 훅을 이용하면 path parameter의 값을 사용할 수 있어요
          */}
          <Route path="items/:productId" element={<ItemPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="community" element={<CommunityFeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
