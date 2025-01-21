import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ItemListPage from "./pages/ItemListPage";
import AddItemPage from "./pages/AddItemPage";
import ItemPage from "./pages/ItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/items">
            <Route index element={<ItemListPage />} />
            <Route path=":id" element={<ItemPage />} />
          </Route>
          <Route path="/additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
