import "./styles/App.css";
import Header from "./components/Layout/Header";
import MarketPage from "./pages/MarketPage/MarketPage";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MarketPage />
      </div>
    </div>
  );
}

export default App;
