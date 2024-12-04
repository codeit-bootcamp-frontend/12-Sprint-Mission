import "./MarketPage.css";
import BestItemSection from "./components/BestItemSection";
import AllItemSection from "./components/AllItemSection";

function MarketPage() {
  return (
    <div className="marketContainer">
      <BestItemSection />
      <AllItemSection />
    </div>
  );
}

export default MarketPage;
