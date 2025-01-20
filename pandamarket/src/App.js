// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/ui/navigation/Navigation'; // 네비게이션 컴포넌트 import
import Home from './pages/Home'; // 홈 페이지 컴포넌트 import
import About from './pages/About'; // 어바웃 페이지 컴포넌트 import
import Services from './pages/Services'; // 서비스 페이지 컴포넌트 import
import Contact from './pages/Contact'; // 연락처 페이지 컴포넌트 import

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
