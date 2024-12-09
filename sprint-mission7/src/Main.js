import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ItemsPage from "./pages/ItemsPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import AddProductPage from "./pages/AddProductPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="items">
            <Route index element={<ItemsPage />} />
            <Route path=":itemSlug" element={<ItemPage />} />
          </Route>
          <Route path="additem" element={<AddProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
