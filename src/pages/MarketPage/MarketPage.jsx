import "./MarketPage.css";
import BestItemSection from "./components/BestItemSection";
import AllItemSection from "./components/AllItemSection";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";

function MarketPage() {
  return (
    <div className="marketContainer">
      {/* <BestItemSection />
      <AllItemSection /> */}
      <ItemDetailPage />
    </div>
  );
}

export default MarketPage;
