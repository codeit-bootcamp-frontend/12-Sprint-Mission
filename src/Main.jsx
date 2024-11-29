import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Item from "./components/ItemPage";
import AddItem from "./components/AddItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* 기본 경로에 App 연결 */}
        <Route path="/item" element={<Item />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
