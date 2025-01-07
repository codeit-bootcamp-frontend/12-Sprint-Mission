import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import PolicyPage from "./pages/PolicyPage/PolicyPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import React from "react";

const MainContent: React.FC = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";
  const hideHeader = isAuthPage;

  return (
    <>
      {!hideHeader && <Header />}

      <main className={isAuthPage ? "" : "withHeader"}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="items/:productId" element={<ItemPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="communityFeed" element={<CommunityFeedPage />} />
          <Route path="privacy" element={<PolicyPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
