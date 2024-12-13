import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:productId" element={<ItemDetailPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
