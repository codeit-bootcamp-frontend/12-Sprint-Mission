import styled from "styled-components";
import HartImg from "../img/favorite_img.png";
import styles from "./ProductList.module.css";

function ProductListItem({ item }) {
  const Img = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: ;
  `;

  const Name = styled.h1`
    color: #1f2937;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    // margin-top: 20px;
    margin: 0;
  `;

  return (
    <div className={styles.container}>
      <Img src={item.images[0]} alt={item.name} />
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

function ProductList({ items }) {
  const Container = styled.ul`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template:
      repeat(2, 1fr) /
      repeat(5, 1fr);
    gap: 24px;
    list-style: none;
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

export default ProductList;
