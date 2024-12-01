import Items from "./components/Items/index";
import Board from "./components/Board";
import Home from "./components/Home";
import AddItem from "components/AddItem";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
      <Route path="/items" element={<Items />} />
      <Route path="/addItem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
