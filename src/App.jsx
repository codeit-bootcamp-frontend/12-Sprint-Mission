import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage.tsx";
import AddItem from "./pages/AddItem.tsx";
import Nav from "./components/Nav.tsx";
import ItemDetail from "./pages/ItemDetail.tsx";
import "./style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/items/:productId" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
