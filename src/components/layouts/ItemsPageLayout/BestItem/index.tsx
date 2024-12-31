import { useMediaQuery } from 'react-responsive';
import ItemCard from '../ItemCard/index';
import { getItems } from '../../../../api/productAPI';
import { useEffect, useState, useCallback } from 'react';
import styles from './index.module.css';
import { MEDIA_KEY, ORDER, BEST_CARD_CNT } from '../../../../utils/constant';

const BestItem = () => {
  const mobileWidth = useMediaQuery({ query: MEDIA_KEY.MOBILE });
  const tabletWidth = useMediaQuery({
    query: MEDIA_KEY.TABLET,
  });
  const [cardCnt, setCardCnt] = useState();
  const [cards, setCards] = useState([]);

  const getProduct = useCallback(async () => {
    const items = await getItems({
      pageSize: cardCnt,
      orderBy: ORDER.FAVORITE,
    });
    setCards(items.list);
  }, [cardCnt]);

  useEffect(() => {
    if (mobileWidth) setCardCnt(BEST_CARD_CNT.MOBILE);
    if (tabletWidth) setCardCnt(BEST_CARD_CNT.TABLET);
    if (!mobileWidth && !tabletWidth) setCardCnt(BEST_CARD_CNT.DESKTOP);
  }, [mobileWidth, tabletWidth]);

  useEffect(() => {
    if (cardCnt) getProduct();
  }, [cardCnt, getProduct]);

  return (
    <section className={styles['best-item']}>
      <p className={styles['sub-title']}>베스트 상품</p>
      <div className={styles['best-item-list']}>
        {cards?.map((value) => (
          <ItemCard key={value.id} value={value} category="best" />
        ))}
      </div>
    </section>
  );
};

export default BestItem;
