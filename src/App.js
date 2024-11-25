import "./App.css";
import Header from "./components/layout/Header";
import BestProducts from "./components/BestProducts/BestProducts";
import AllProducts from "./components/AllProducts/AllProducts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BestProducts />
        <AllProducts />
      </div>
    </BrowserRouter>
  );
}

export default App;
