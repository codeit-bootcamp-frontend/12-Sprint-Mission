import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../API";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemDetail from "./ItemDetail";
import ItemComment from "./ItemComment";
import BackIcon from "../assets/back-icon.png";
import "./ItemPage.css";

const SectionDivider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0;

  @media (min-width: 768px) {
    margin: 40px 0 40px 0;
  }
`;

function ItemPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setError("상품 아이디가 제공되지 않았어요.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data = await getProductDetail(productId);
        if (!data) {
          throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
        }
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (error) {
    alert(`오류: ${error}`);
  }

  if (!productId || !product) return null;

  return (
    <div className="container">
      <div className="itemPageContainer">
        <ItemDetail product={product} />
        <SectionDivider />

        <ItemComment productId={productId} />

        <Link to="/items">
          <button className="backToMarketPage">
            <p>목록으로 돌아가기</p>
            <img src={BackIcon} alt="목록으로 돌아가기" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ItemPage;
