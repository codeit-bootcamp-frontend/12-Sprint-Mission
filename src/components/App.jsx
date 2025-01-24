import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import AllProductList from "./AllProductList";
import BestProductList from "./BestProductList";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BestProductList />
        <AllProductList />
      </main>
    </>
  );
}

export default App;
