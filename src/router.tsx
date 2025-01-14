import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ItemsPage from "./pages/ItemPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "items",
        element: <ItemsPage />,
      },
      {
        path: "items/:productId",
        element: <ItemDetailPage />,
      },
      {
        path: "additem",
        element: <AddItemPage />,
      },
    ],
  },
]);

export default router;
