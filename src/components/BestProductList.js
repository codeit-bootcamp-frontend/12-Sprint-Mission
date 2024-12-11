import styled from "styled-components";
import { ProductListItem } from "./ProductList";

function BestProduct({ items }) {
  const Container = styled.ul`
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template:
      1fr /
      repeat(4, 1fr);
    gap: 24px;
    list-style: none;

    @media (max-width: 1199px) {
      grid-template:
        1fr /
        repeat(2, 1fr);
    }

    @media (min-width: 375px) and (max-width: 767px) {
      grid-template:
        1fr /
        1fr;
    }
  `;

  return (
    <Container>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductListItem item={item} />
          </li>
        );
      })}
    </Container>
  );
}

export default BestProduct;
