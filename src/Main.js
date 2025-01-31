import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import ItemsPage from "./pages/ItemsPage";
import AddItem from "./pages/AddItem";
import BoardsPage from "./pages/BoardsPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
