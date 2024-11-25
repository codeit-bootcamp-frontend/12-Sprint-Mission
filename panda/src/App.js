// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery"; // ProductGallery 추가

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
