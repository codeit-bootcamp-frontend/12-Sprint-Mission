import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, LineDivider } from "../../styles/CommonStyles";
import { getProductById } from "../../api/itemApi";
import ItemDetailsSection from "./components/ItemDetailsSection";

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
        const data = await getProductById(productId);
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

  return (
    <Container>
      <ItemDetailsSection item={item} />
      <LineDivider $margin="4rem 0 4rem" />
    </Container>
  );
}

export default ItemPage;
