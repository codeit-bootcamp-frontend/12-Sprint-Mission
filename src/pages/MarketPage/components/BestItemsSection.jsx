import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api/api';

function BestItemSection() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  const getData = async (options) => {
    const { list } = await getProducts(options);
    setItems(list);
  };

  const getPageSize = () => {
    const width = window.innerWidth;
    if (width > 1200) setPageSize(4);
    else if (width > 768) setPageSize(2);
    else setPageSize(1);
  };

  useEffect(() => {
    window.addEventListener('resize', getPageSize);
    getData({ pageSize, orderBy: 'favorite' });
  }, [pageSize]);

  return (
    <div className="bestItemsSection">
      <h1 className="sectionTitle">베스트 상품</h1>
      <div className="itemsSection">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default BestItemSection;
