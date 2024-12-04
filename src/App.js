import "./App.css";
import Header from "./components/layout/Header";
import BestProducts from "./components/BestProducts/BestProducts";
import AllProducts from "./components/AllProducts/AllProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainContent() {
  return (
    <>
      <BestProducts />
      <AllProducts />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/items" element={<MainContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
