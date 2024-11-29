import { useEffect, useState } from 'react';
import arrowLeft from '../../../assets/images/arrow_left.png';
import arrowRight from '../../../assets/images/arrow_right.png';
import styles from './Pagination.module.css';
const PaginationBar = ({ onClick, order, totalPageNum, cardCnt }) => {
  const [activeNum, setActiveNum] = useState(1);
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true);
  const [disabledArrowRight, setDisabledArrowRight] = useState(false);

  const pageSelect = (pageNum) => {
    setActiveNum(pageNum);
    onClick(pageNum);
  };

  const startNum = Math.floor((activeNum - 1) / 5) * 5 + 1;

  const pages = Array.from(
    {
      length: Math.min(5, Math.ceil(totalPageNum - startNum) + 1),
    },
    (_, i) => startNum + i
  );

  const prevClick = () => {
    pageSelect(startNum - 5);
  };

  const nextClick = () => {
    pageSelect(startNum + 5);
  };

  useEffect(() => {
    setActiveNum(1);
  }, [order]);

  useEffect(() => {
    if (activeNum > totalPageNum) pageSelect(totalPageNum);
  }, [totalPageNum]);

  useEffect(() => {
    const divActiveNum = Math.floor((activeNum - 1) / 5);
    const divTotalPageNum = Math.floor((totalPageNum - 1) / 5);
    if (activeNum > 5) setDisabledArrowLeft(false);
    else setDisabledArrowLeft(true);
    if (totalPageNum <= 5) {
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
