import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
