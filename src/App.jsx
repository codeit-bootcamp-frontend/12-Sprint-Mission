import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
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
          <Route
            path="/"
            element={<Navigate to="/items" replace></Navigate>}
          ></Route>
          <Route path="/items" element={<Home></Home>}></Route>
          <Route path="/additem" element={<AddItem></AddItem>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
