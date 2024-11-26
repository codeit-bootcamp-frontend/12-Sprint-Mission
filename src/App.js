import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from "./pages/Home/Items";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
