import Header from "./components/layout/Header";
import ProductPage from "./pages/Product/ProductPage";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductPage />
      </main>
    </>
  );
}

export default App;
