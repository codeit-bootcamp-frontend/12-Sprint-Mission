import BestItem from "./BestItem";
import AllItem from "./AllItem";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="container">
      <BestItem />
      <AllItem />
    </div>
  );
}

export default MarketPage;
