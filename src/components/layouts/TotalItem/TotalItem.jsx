import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import getItems from '../../../api/productGet';
import TotalItemTitle from '../TotalItemTitle/TotalItemTitle';
import ItemCard from '../ItemCard/ItemCard';
// import PaginationBar from '../PaginationBar/PaginationBar';

const TotalItem = () => {
  const mobileWidth = useMediaQuery({ query: '(max-width:768px)' });
  const tabletWidth = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1200px)',
  });
  const [cardCnt, setCardCnt] = useState(10);
  const [cards, setCards] = useState([]);

  const getProduct = async () => {
    try {
      const items = await getItems({ pageSize: cardCnt, orderBy: 'favorite' });
      setCards(items.list);
    } catch (error) {
      console.error('아이템 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    mobileWidth ? setCardCnt(4) : tabletWidth ? setCardCnt(6) : setCardCnt(10);
  }, [mobileWidth, tabletWidth]);

  useEffect(() => {
    getProduct();
  }, [cardCnt]);

  return (
    <section className={`total-items${cardCnt}`}>
      <TotalItemTitle />
      {Array.isArray(cards) &&
        cards.map((value, index) => {
          return <ItemCard key={`${index}`} value={value} category="total" />;
        })}
      {/* <PaginationBar /> */}
    </section>
  );
};

export default TotalItem;
