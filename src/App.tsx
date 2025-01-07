import React from "react";
import Items from "./components/Items/index.tsx";
import Board from "./components/Board/index.tsx";
import Home from "./components/Home/index.tsx";
import AddItem from "./components/AddItem/index.tsx";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/index.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
      <Route path="/items" element={<Items />} />
      <Route path="/addItem" element={<AddItem />} />
      <Route path="/items/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
