// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes ,useNavigate} from "react-router-dom";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery"; // ProductGallery 추가
import AddItemPage from "./components/AddItemPage"; 


function RedirectToItems() {
  const navigate = useNavigate();

  useEffect(() => {
    // 애플리케이션 시작 시 /items로 리디렉션
    navigate("/items");
  }, [navigate]);

  return null; // 빈 화면 렌더링
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToItems />} /> 
        <Route 
          path='items'
          element= {
           <>
            <Header />
            <ProductGallery />
           </>
          }
        />

        <Route 
          path="/additem"  
          element= {
          <>
            <Header />
            <AddItemPage />
          </>
          } 
        />

      </Routes>
    </Router>
  );
}

export default App;
