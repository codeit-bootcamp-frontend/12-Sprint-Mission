import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import getItems from '../../../../api/productGet';
import TotalItemTitle from './TotalItemTitle/index';
import ItemCard from '../ItemCard/index';
import PaginationBar from '../../UI/PaginationBar/index';
import styles from './index.module.css';
import {
  TOTAL_CARD_CNT,
  PAGE_RELATION_NUMBER,
  ORDER,
  MEDIA_KEY,
} from '../../../../utils/constant';

const TotalItem = () => {
  const mobileWidth = useMediaQuery({ query: MEDIA_KEY.MOBILE });
  const tabletWidth = useMediaQuery({
    query: MEDIA_KEY.TABLET,
  });
  const [cardCnt, setCardCnt] = useState();
  const [cards, setCards] = useState([]);
  const [order, setOrder] = useState(ORDER.RECENT);
  const [page, setPage] = useState(PAGE_RELATION_NUMBER.INIT_PAGE);
  const [totalPageNum, setTotalPageNum] = useState();

  const getProduct = useCallback(async () => {
    const items = await getItems({
      pageSize: cardCnt,
      orderBy: order,
      page: page,
    });
    setCards(items.list);
    setTotalPageNum(Math.ceil(items.totalCount / cardCnt));
  }, [cardCnt, order, page]);

  const orderSelect = (orderQuery) => {
    setOrder(orderQuery);
    setPage(PAGE_RELATION_NUMBER.INIT_PAGE);
  };

  const changePage = (num) => {
    setPage(num);
  };

  useEffect(() => {
    if (mobileWidth) setCardCnt(TOTAL_CARD_CNT.MOBILE);
    if (tabletWidth) setCardCnt(TOTAL_CARD_CNT.TABLET);
    if (!mobileWidth && !tabletWidth) setCardCnt(TOTAL_CARD_CNT.DESKTOP);
  }, [mobileWidth, tabletWidth]);

  useEffect(() => {
    if (cardCnt) getProduct();
  }, [cardCnt, order, page, getProduct]);

  return (
    <section className={styles[`total-items`]}>
      <TotalItemTitle onClick={orderSelect} />
      <div className={styles['total-item-list']}>
        {cards?.map((value) => (
          <ItemCard key={value.id} value={value} category="total" />
        ))}
      </div>

      <PaginationBar
        onClick={changePage}
        order={order}
        totalPageNum={totalPageNum}
        cardCnt={cardCnt}
      />
    </section>
  );
};

export default TotalItem;
