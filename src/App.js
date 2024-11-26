import Header from "./components/Header/index";
import Best from "./components/Best/index";
import AllProducts from "./components/AllProducts/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Best />
      <AllProducts />
    </Router>
  );
}

export default App;
