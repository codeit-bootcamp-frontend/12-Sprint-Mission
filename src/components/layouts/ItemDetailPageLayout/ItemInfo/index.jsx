import { useParams } from 'react-router-dom';
import { getItemDetail } from 'api/productAPI';
import { useCallback, useEffect, useState } from 'react';

const ItemInfo = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getItem = useCallback(async () => {
    const response = await getItemDetail(id);
    setItem(response);
  }, [id]);

  useEffect(() => {
    getItem();
  }, [getItem]);
  return <p className="py-4">{JSON.stringify(item)}</p>;
};

export default ItemInfo;
