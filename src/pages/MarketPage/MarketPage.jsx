import "./MarketPage.css";
import BestItemSection from "./components/BestItemSection";
import AllItemSection from "./components/AllItemSection";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";
import MarketHeader from "../../components/Header/MarketHeader";

function MarketPage() {
  return (
    <div className="marketContainer">
      <MarketHeader />
      <BestItemSection />
      <AllItemSection />
      {/* <ItemDetailPage /> */}
    </div>
  );
}

export default MarketPage;
