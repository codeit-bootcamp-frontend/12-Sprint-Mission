import { useMediaQuery } from 'react-responsive';
import ItemCard from '../ItemCard/ItemCard';
import getItems from '../../../api/productGet';
import { useEffect, useState } from 'react';

const BestItem = () => {
  const mobileWidth = useMediaQuery({ query: '(max-width:768px)' });
  const tabletWidth = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1200px)',
  });
  const [cardCnt, setCardCnt] = useState(4);
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
    mobileWidth ? setCardCnt(1) : tabletWidth ? setCardCnt(2) : setCardCnt(4);
  }, [mobileWidth, tabletWidth]);

  useEffect(() => {
    getProduct();
  }, [cardCnt]);

  return (
    <section className={`best-items${cardCnt}`}>
      <p className="sub-title">베스트 상품</p>
      {Array.isArray(cards) &&
        cards.map((value, index) => {
          return <ItemCard key={`${index}`} value={value} category="best" />;
        })}
    </section>
  );
};

export default BestItem;
