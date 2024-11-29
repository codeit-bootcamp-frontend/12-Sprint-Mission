import "./Styles/App/Reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/App/ScrollToTop";
import { lazy, Suspense } from "react";
import Loading from "./Components/App/Loading";

const App = lazy(() => import("./Components/App/App"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ItemsListPage = lazy(() =>
  import("./Pages/ProductListPage/ItemsListPage")
);
const ProductRgsPage = lazy(() =>
  import("./Pages/ProductRgsPage/ProductRgsPage")
);

function Main() {
  return (
    <BrowserRouter
      // Router Future Flag Warning 메세지가 콘솔에 출력되어 추가
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="items" element={<ItemsListPage />} />
            <Route path="additem" element={<ProductRgsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Main;