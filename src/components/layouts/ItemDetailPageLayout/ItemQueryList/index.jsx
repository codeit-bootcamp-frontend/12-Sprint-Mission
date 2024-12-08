import { getItemComments } from 'api/productAPI';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import emptyQueryImg from 'assets/images/Img_inquiry_empty.svg';

import ItemQuery from './ItemQuery';

const EmptyQueryList = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <img src={emptyQueryImg} alt="빈 댓글 이미지" />
      <p className="text-gray-400">아직 문의가 없어요</p>
    </div>
  );
};

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
  const renderComments =
    comments.length > 0 ? (
      comments.map((value) => <ItemQuery key={value.id} query={value} />)
    ) : (
      <EmptyQueryList />
    );

  return (
    <section className="flex flex-col mx-auto w-4/5">{renderComments}</section>
  );
};

export default ItemQueryList;
