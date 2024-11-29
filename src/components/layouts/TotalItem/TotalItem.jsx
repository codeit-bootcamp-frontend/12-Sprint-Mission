import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import getItems from '../../../api/productGet';
import TotalItemTitle from '../TotalItemTitle/TotalItemTitle';
import ItemCard from '../ItemCard/ItemCard';
import PaginationBar from '../PaginationBar/PaginationBar';
import styles from './TotalItem.module.css';

const TotalItem = () => {
  const mobileWidth = useMediaQuery({ query: '(max-width:768px)' });
  const tabletWidth = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1200px)',
  });
  const [cardCnt, setCardCnt] = useState();
  const [cards, setCards] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
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
    setPage(1);
  };

  const changePage = (num) => {
    setPage(num);
  };

  useEffect(() => {
    if (mobileWidth) setCardCnt(4);
    if (tabletWidth) setCardCnt(6);
    if (!mobileWidth && !tabletWidth) setCardCnt(10);
  }, [mobileWidth, tabletWidth]);

  useEffect(() => {
    if (cardCnt) getProduct();
  }, [cardCnt, order, page, getProduct]);

  return (
    <section className={styles[`total-items`]}>
      <TotalItemTitle onClick={orderSelect} />
      <div className={styles['total-item-list']}>
        {cards?.map((value, index) => (
          <ItemCard key={`${index}`} value={value} category="total" />
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
