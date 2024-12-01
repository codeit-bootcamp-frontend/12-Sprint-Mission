import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ItemsPage from "./pages/ItemsPage";
import AddProductPage from "./pages/AddProductPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddProductPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
