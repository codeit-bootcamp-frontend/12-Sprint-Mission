import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import Layout from "./components/Layout";
import App from "./App";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";
import Faq from "./pages/Faq";
import Items from "./pages/Items";
import ItemDetail from "./pages/Items/ItemDetail";
import ItemAdd from "./pages/Items/ItemAdd";
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
            children: [
              { path: "", element: <Items /> },
              { path: ":id", element: <ItemDetail /> },
            ],
          },
          {
            path: "addItem",
            element: <ItemAdd />,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
