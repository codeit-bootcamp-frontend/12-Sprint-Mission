import './App.css';
import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './pages/itemlist/itemlist'; // ItemList 컴포넌트 경로 확인

function App() {
  return (
    <div className="App">
      <Router>
        {/* Link를 사용해서 페이지 이동 */}
        <Link to="/itemlist" className="button pill-button">
          구경하러 가기
        </Link>
        
        {/* Routes와 Route로 페이지 설정 */}
        <Routes>
          <Route path="/itemlist" element={<ItemList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
