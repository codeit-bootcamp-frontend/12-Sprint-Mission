import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Navigation/Header";
import MainPage from "./pages/MainPage";
import PostProductPage from "./pages/PostProductPage";
import ProductDetail from "./pages/ProductDetail";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items">
          <Route index element={<MainPage />} />
          <Route path=":productSlug" element={<ProductDetail />} />
        </Route>
        {/* <Route path="/items/product" element={<ProductDetail />} /> */}
        <Route path="/additem" element={<PostProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
