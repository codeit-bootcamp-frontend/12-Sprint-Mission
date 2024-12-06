import { useParams } from 'react-router-dom';

const ItemInfo = () => {
  const { id } = useParams();
  return <p>{`${id}번 상품`}</p>;
};

export default ItemInfo;
