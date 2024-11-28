import "./App.css";

import NavBar from "./NavBar";
import BestProductContainer from "./BestProductContainer";
import AllProductContainer from "./AllProductContainer";

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
