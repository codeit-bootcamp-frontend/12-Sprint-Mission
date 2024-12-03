import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="items" element={<Items />} />
          <Route path="additem" element={<AddItem />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
