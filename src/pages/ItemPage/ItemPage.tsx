import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, LineDivider } from "@/styles/CommonStyles";
import { getProductById } from "@/api/itemApi";
import ItemDetailsSection from "@/pages/ItemPage/components/ItemDetailsSection";
import ItemCommentsSection from "@/pages/ItemPage/components/ItemCommentsSection";
import BackIcon from "@/assets/images/icons/ic_back.svg?react";

const BackToMarketPageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin: 0 auto;
  width: 24rem;
  height: 4.8rem;
  border-radius: 4rem;
  background-color: var(--primary-100);
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--secondary-100);
  cursor: pointer;
  margin-bottom: 18rem;

  &:hover {
    background-color: var(--primary-200);
  }

  &:focus {
    background-color: var(--primary-300);
  }
`;

const Loading = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 20rem;
`;

function ItemPage() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const data = await getProductById(Number(productId));
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details: ", error);
      }
    };

    fetchItemDetails();
  }, [productId]);

  if (!item) {
    return <Loading>로딩 중...</Loading>;
  }

  const safeProductId = productId || "";

  return (
    <Container>
      <ItemDetailsSection item={item} />
      <LineDivider $margin="4rem 0 4rem" />
      <ItemCommentsSection productId={safeProductId} />
      <BackToMarketPageLink to="/items">
        목록으로 돌아가기
        <BackIcon />
      </BackToMarketPageLink>
    </Container>
  );
}

export default ItemPage;
