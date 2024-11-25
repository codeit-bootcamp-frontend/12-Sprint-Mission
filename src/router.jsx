import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import ProtectedRoute from "./pages/ProtectedRoute";
import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Privacy from "./pages/privacy";
import Faq from "./pages/faq";
import Items from "./pages/items";
import ItemDetail from "./pages/items/detail";
import ItemAdd from "./pages/items/add";
import Boards from "./pages/boards";
import ErrorPage from "./pages/error";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Layout hasFooter />,
        children: [
          {
            index: true,
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
              { index: true, element: <Items /> },
              { path: ":id", element: <ItemDetail /> },
            ],
          },
          {
            path: "addItem",
            element: (
              <ProtectedRoute>
                <ItemAdd />
              </ProtectedRoute>
            ),
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
