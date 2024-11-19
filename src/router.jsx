import { createBrowserRouter } from "react-router-dom";
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

export const router = createBrowserRouter([
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
