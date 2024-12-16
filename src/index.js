import React from "react";
import "../src/assets/css/global.css";
import "../src/assets//css/reset.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
