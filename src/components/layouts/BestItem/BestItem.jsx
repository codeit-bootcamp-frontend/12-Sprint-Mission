import { useMediaQuery } from 'react-responsive';
import ItemCard from '../ItemCard/ItemCard';
import getItems from '../../../api/productGet';
import { useEffect, useState, useCallback } from 'react';
import styles from './BestItem.module.css';

const BestItem = () => {
  const mobileWidth = useMediaQuery({ query: '(max-width:768px)' });
  const tabletWidth = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1200px)',
  });
  const [cardCnt, setCardCnt] = useState();
  const [cards, setCards] = useState([]);

  const getProduct = useCallback(async () => {
    const items = await getItems({ pageSize: cardCnt, orderBy: 'favorite' });
    setCards(items.list);
  }, [cardCnt]);

  useEffect(() => {
    if (mobileWidth) setCardCnt(1);
    if (tabletWidth) setCardCnt(2);
    if (!mobileWidth && !tabletWidth) setCardCnt(4);
  }, [mobileWidth, tabletWidth]);

  useEffect(() => {
    if (cardCnt) getProduct();
  }, [cardCnt, getProduct]);

  return (
    <section className={styles['best-item']}>
      <p className={styles['sub-title']}>베스트 상품</p>
      <div className={styles['best-item-list']}>
        {cards?.map((value, index) => (
          <ItemCard key={`${index}`} value={value} category="best" />
        ))}
      </div>
    </section>
  );
};

export default BestItem;
