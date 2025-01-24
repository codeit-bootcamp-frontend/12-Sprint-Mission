import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";
import SignIn from "./pages/login/SignIn";
import AddProductPage from "./components/productCreate/AddProductPage";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NotFound from "./pages/NotFound";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="product">
          <Route index element={<ProductList />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
