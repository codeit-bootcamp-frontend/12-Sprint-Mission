import "./App.css";
import Header from "./components/layout/Header";
import BestProducts from "./components/BestProducts/BestProducts";
import AllProducts from "./components/AllProducts/AllProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./pages/additem";
import "./styles/global.css";
import ItemPage from "./pages/ItemPage/ItemPage";

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
          <Route path="/items">
            <Route index element={<MainContent />} />
            <Route path=":productSlug" element={<ItemPage />} />
          </Route>
          <Route path="/" element={<MainContent />} />
          <Route path="pages/additem" element={<AddItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
