import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage.jsx";
import AddItem from "./pages/AddItem.jsx";
import Nav from "./components/Nav.jsx";
import "./Style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
