import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import AddProductPage from "./components/productCreate/AddProductPage";

function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Main;
