import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getProductDetail } from "../../api/itemApi";
import ItemDetail from "./ItemDetail";
import ItemComment from "./ItemComment";
import BackIcon from "../../assets/icons/ic-back.svg";
import { Product } from "../../types/productTypes";
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

const ItemPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { productId } = useParams();
  const productIdNumber = Number(productId);

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setError("상품 아이디가 제공되지 않았어요.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data: Product = await getProductDetail(productIdNumber);
        if (!data) {
          throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
        }
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
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
    <>
      <div className="container">
        <div className="itemPageContainer">
          <ItemDetail product={product} item={""} />
          <SectionDivider />

          <ItemComment productId={productIdNumber} />

          <Link to="/items">
            <button className="backToMarketPage">
              <p>목록으로 돌아가기</p>
              <img src={BackIcon} alt="목록으로 돌아가기" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
