import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, LineDivider, StyledLink } from "../../styles/CommonStyles";
import { getProductDetail } from "../../api/itemApi";
import ItemProfileSection from "./components/ItemProfileSection";
import ItemCommentSection from "./components/ItemCommentSection";
import { ReactComponent as BackIcon } from "../../assets/images/icons/ic_back.svg";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

// styled-components 타입 정의
const BackToMarketPageLink = styled(StyledLink)<{ $pill?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
`;

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  // 필요한 필드를 추가
}

function ItemPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useParams로 URL의 path parameter를 가져옴
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setError("상품 아이디가 제공되지 않았어요.");
        setIsLoading(false);
        return;
      }

      // productId를 숫자로 변환
      const numericProductId = parseInt(productId, 10);
      if (isNaN(numericProductId)) {
        setError("상품 아이디가 유효하지 않습니다.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data = await getProductDetail(numericProductId); // 변환된 숫자 전달
        if (!data) {
          throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
        }
        setProduct(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "알 수 없는 오류가 발생했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (error) {
    return (
      <Container>
        <p style={{ color: "red" }}>오류: {error}</p>
      </Container>
    );
  }

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (!productId || !product) {
    return (
      <Container>
        <p>상품 정보를 불러올 수 없습니다.</p>
      </Container>
    );
  }

  return (
    <Container>
      <ItemProfileSection product={product} />

      <LineDivider />

      <ItemCommentSection productId={productId} />

      <BackToMarketPageLink $pill={true} to="/items">
        목록으로 돌아가기
        <BackIcon />
      </BackToMarketPageLink>
    </Container>
  );
}

export default ItemPage;
