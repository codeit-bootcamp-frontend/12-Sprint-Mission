import styled from "styled-components";
import styles from "./ProductList.module.css";
import HartImg from "../img/favorite_img.png";
import EmptyImg from "../img/empty_img.png";

const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  background-color: #f9fafb;
  object-fit: cover;
  border-radius: 16px;
`;

const Name = styled.h1`
  color: #1f2937;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

export function ProductListItem({ item }) {
  return (
    <div className={styles.container}>
      {!item.images[0] ? (
        <Img src={EmptyImg} alt={item.name} />
      ) : (
        <Img src={item.images[0]} alt={item.name} />
      )}
      <Name>{item.name}</Name>
      <p className={styles.price}>{item.price.toLocaleString("ko-KR")}원</p>
      <div className={styles.favorite_box}>
        <img
          className={styles.favorite_box__img}
          src={HartImg}
          alt="좋아요 이미지"
        />
        <p className={styles.favorite_box__count}>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

const Container = styled.ul`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template:
    repeat(2, 1fr) /
    repeat(5, 1fr);
  gap: 18px;
  list-style: none;

  @media (max-width: 1199px) {
    grid-template:
      repeat(2, 1fr) /
      repeat(3, 1fr);
  }

  @media (min-width: 375px) and (max-width: 767px) {
    grid-template:
      repeat(2, 1fr) /
      repeat(2, 1fr);
  }
`;

function ProductList({ items }) {
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

export default ProductList;
