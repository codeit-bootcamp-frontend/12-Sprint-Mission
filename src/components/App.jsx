import "./App.css";

import NavBar from "./Nav/NavBar";
import BestProductContainer from "./ProuductListPage/BestProductContainer";
import AllProductContainer from "./ProuductListPage/AllProductContainer";

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
