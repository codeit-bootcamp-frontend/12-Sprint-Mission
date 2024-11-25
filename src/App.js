import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/items/ItemsPage.js";
import Additem from "./components/Additem.js";
import Nav from "./components/Nav.js";
import "./Style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/additem" element={<Additem />} />
      </Routes>
    </Router>
  );
}

export default App;
