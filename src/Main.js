import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ItemListPage from "./pages/ItemListPage";
import AddItemPage from "./pages/AddItemPage";
import ItemPage from "./pages/ItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index />
          <Route path="items">
            <Route index element={<ItemListPage />} />
            <Route path=":id" element={<ItemPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
