import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App.js가 src 디렉토리에 있어야 합니다.
import './index.css'; // 스타일 시트가 필요하다면 추가하세요.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
