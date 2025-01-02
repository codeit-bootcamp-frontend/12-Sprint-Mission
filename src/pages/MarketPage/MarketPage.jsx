import "./MarketPage.css";
import BestItemSection from "./components/BestItemSection";
import AllItemSection from "./components/AllItemSection";
import MarketHeader from "../../components/Header/MarketHeader";
import { useParams } from "react-router-dom";

function MarketPage() {
  useParams();
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
