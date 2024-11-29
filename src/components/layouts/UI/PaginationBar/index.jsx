import { useCallback, useEffect, useState } from 'react';
import arrowLeft from '../../../../assets/images/arrow_left.png';
import arrowRight from '../../../../assets/images/arrow_right.png';
import styles from './index.module.css';
import { PAGE_RELATION_NUMBER } from '../../../../utils/constant';

const PaginationBar = ({ onClick, order, totalPageNum }) => {
  const [activeNum, setActiveNum] = useState(PAGE_RELATION_NUMBER.INIT_PAGE);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);

  const pageSelect = useCallback(
    (pageNum) => {
      setActiveNum(pageNum);
      onClick(pageNum);
    },
    [onClick]
  );

  const startNum =
    Math.floor((activeNum - 1) / PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE) *
      PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE +
    1;

  const pages = Array.from(
    {
      length: Math.min(
        PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE,
        Math.ceil(totalPageNum - startNum) + 1
      ),
    },
    (_, i) => startNum + i
  );

  const prevClick = () => {
    pageSelect(startNum - PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE);
  };

  const nextClick = () => {
    pageSelect(startNum + PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE);
  };

  useEffect(() => {
    setActiveNum(PAGE_RELATION_NUMBER.INIT_PAGE);
  }, [order]);

  useEffect(() => {
    if (activeNum > totalPageNum) pageSelect(totalPageNum);
  }, [activeNum, totalPageNum, pageSelect]);

  useEffect(() => {
    const divActiveNum = Math.floor(
      (activeNum - 1) / PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE
    );
    const divTotalPageNum = Math.floor(
      (totalPageNum - 1) / PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE
    );
    if (activeNum > PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE)
      setDisabledArrowLeft(false);
    else setDisabledArrowLeft(true);

    if (totalPageNum <= PAGE_RELATION_NUMBER.MAX_PAGINATION_SIZE) {
      setDisabledArrowRight(true);
    }

    if (divActiveNum === divTotalPageNum) setDisabledArrowRight(true);
    else setDisabledArrowRight(false);
  }, [activeNum, totalPageNum]);

  return (
    <div className={styles['pagination']}>
      <button
        className={styles['page-arrow-btn']}
        disabled={disabledArrowLeft}
        onClick={() => prevClick()}
      >
        <img src={arrowLeft} alt="좌측 화살표" />
      </button>
      {pages.map((value) => {
        const active = activeNum === value ? 'active-page-num' : '';
        return (
          <button
            key={value}
            className={`${styles['page-num-btn']} ${styles[active]}`}
            onClick={() => pageSelect(value)}
          >
            {value}
          </button>
        );
      })}
      <button
        className={styles['page-arrow-btn']}
        disabled={disabledArrowRight}
        onClick={() => nextClick()}
      >
        <img src={arrowRight} alt="우측 화살표" />
      </button>
    </div>
  );
};

export default PaginationBar;
