import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import AddItem from "./pages/AddItem/AddItem.jsx";
import Items from "./pages/Items/Items.jsx";
import "./css/Reset.css";
import "./css/Global.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/item" element={<Items></Items>}></Route>
          <Route path="/additem" element={<AddItem></AddItem>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
