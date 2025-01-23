import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import ItemPage from "./components/ItemPage/ItemPage";
import AddItem from "./components/AddItemPage/AddItemPage";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/items" element={<ProductPage />} />
        <Route path="/items/:id" element={<ItemPage />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
