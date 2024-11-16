import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";
import Faq from "./pages/Faq";
import Items from "./pages/Items";
import Boards from "./pages/Boards";
import "./assets/scss/style.scss";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Layout hasFooter />,
        children: [
          {
            path: "",
            element: <Landing />,
          },
        ],
      },
      {
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "privacy",
            element: <Privacy />,
          },
          {
            path: "faq",
            element: <Faq />,
          },
        ],
      },
      {
        element: <Layout hasNav />,
        children: [
          {
            path: "items",
            element: <Items />,
          },
          {
            path: "boards",
            element: <Boards />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
