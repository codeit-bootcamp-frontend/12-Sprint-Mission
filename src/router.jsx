import { createBrowserRouter } from "react-router-dom";
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
import ItemModifyPage from "./pages/items/ItemModifyPage";
import BoardPage from "./pages/boards/BoardPage";
import { Loading } from "@components/ui/Loading";

import ItemDetailPageLoader from "./pages/items/ItemDetailPage.loader";
import ItemModifyPageLoader from "./pages/items/ItemModifyPage.loader";

export const router = createBrowserRouter(
  [
    {
      path: "/",
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
                {
                  path: ":id",
                  element: <ItemDetailPage />,
                  hydrateFallbackElement: (
                    <Loading>정보를 가져오는 중입니다..</Loading>
                  ),
                  loader: ItemDetailPageLoader,
                },
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
              path: "modifyItem/:id",
              element: (
                <ProtectedRoute>
                  <ItemModifyPage />
                </ProtectedRoute>
              ),
              hydrateFallbackElement: (
                <Loading>정보를 가져오는 중입니다..</Loading>
              ),
              loader: ItemModifyPageLoader,
            },
            {
              path: "boards",
              element: <BoardPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
