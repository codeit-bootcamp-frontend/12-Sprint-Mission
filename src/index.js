import React from "react";
import "../src/assets//css/reset.css";
import "../src/assets/css/global.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
