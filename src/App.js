import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import ItemsSection from "./components/ItemsSection";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <ItemsSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
