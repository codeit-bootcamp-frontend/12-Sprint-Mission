import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "@components/Layout";
import ProtectedRoute from "@components/routing/ProtectedRoute";
import ErrorPage from "./pages/error/ErrorPage";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import PrivacyPage from "./pages/etc/PrivacyPage";
import FaqPage from "./pages/etc/FaqPage";
import ItemsPage from "./pages/items/ItemsPage";
import ItemDetailPage from "./pages/items/ItemDetailPage";
import ItemAddPage from "./pages/items/ItemAddPage";
import BoardPage from "./pages/boards/BoardPage";

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
            element: <LandingPage />,
          },
        ],
      },
      {
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "signup",
            element: <SignupPage />,
          },
          {
            path: "privacy",
            element: <PrivacyPage />,
          },
          {
            path: "faq",
            element: <FaqPage />,
          },
        ],
      },
      {
        element: <Layout hasNav />,
        children: [
          {
            path: "items",
            children: [
              { index: true, element: <ItemsPage /> },
              { path: ":id", element: <ItemDetailPage /> },
            ],
          },
          {
            path: "addItem",
            element: (
              <ProtectedRoute>
                <ItemAddPage />
              </ProtectedRoute>
            ),
          },
          {
            path: "boards",
            element: <BoardPage />,
          },
        ],
      },
    ],
  },
]);
