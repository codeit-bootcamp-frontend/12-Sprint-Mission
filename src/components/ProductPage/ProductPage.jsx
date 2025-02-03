import BestProductContainer from "./components/BestProductContainer";
import AllProductContainer from "./components/AllProductContainer";

export default function ProductPage() {
  return (
    <div>
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <BestProductContainer />
        <AllProductContainer />
      </div>
    </div>
  );
}
