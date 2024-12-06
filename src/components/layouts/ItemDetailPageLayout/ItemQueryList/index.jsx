import { getItemComments } from 'api/productAPI';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemQuery from './ItemQuery';

const ItemQueryList = () => {
  const { id } = useParams();
  const [comments, setComments] = useState(null);

  const getComments = useCallback(async () => {
    const response = await getItemComments(id);
    setComments(response.list);
  }, [id]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  if (!comments) {
    return <p>로딩 중</p>;
  }

  return (
    <section className="flex flex-col mx-auto w-4/5">
      {comments.map((value) => (
        <ItemQuery key={value.id} query={value} />
      ))}
    </section>
  );
};

export default ItemQueryList;
