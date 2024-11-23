import Container from "@components/Container";
import BestItems from "./components/BestItems";
import AllItems from "./components/AllItems";

export default function Items() {
  return (
    <Container>
      <BestItems />
      <AllItems />
    </Container>
  );
}
