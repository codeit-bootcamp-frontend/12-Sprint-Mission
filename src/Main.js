import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import AddItemPage from "./components/AddItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
