import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemPage/ItemsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
