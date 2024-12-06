import "./App.css";

import NavBar from "../components/NavBar";
import BestProductContainer from "../components/BestProductContainer";
import AllProductContainer from "../components/AllProductContainer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="productContainer">
        <BestProductContainer />
        <AllProductContainer />
      </div>
    </div>
  );
}

export default App;
