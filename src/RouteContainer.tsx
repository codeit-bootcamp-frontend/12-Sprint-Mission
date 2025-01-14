import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app/reset.css";
import ScrollToTop from "./Components/App/ScrollToTop";
import Loading from "./Components/App/Loading";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";

const App = lazy(() => import("./Components/App/App"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ProductList = lazy(
  () => import("./Pages/ProductListPage/ProductListPage")
);
const ProductRgsPage = lazy(
  () => import("./Pages/ProductRgsPage/ProductRgsPage")
);

function RouteContainer() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegistrationPage />} />
            <Route path="items">
              <Route index element={<ProductList />} />
              <Route path="additem" element={<ProductRgsPage />} />
              <Route path=":id" element={<ProductDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RouteContainer;
