import { getItemComments } from '@/api/productAPI';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import emptyQueryImg from '@/assets/images/Img_inquiry_empty.svg';
import { Comment } from '@/api/types';

import ItemQuery from './ItemQuery';

const EmptyQueryList = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-10'>
      <img src={emptyQueryImg} alt='빈 댓글 이미지' />
      <p className='text-gray-400'>아직 문의가 없어요</p>
    </div>
  );
};

const ItemQueryList = () => {
  const { id } = useParams();
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [nextCursor, setNextCursor] = useState<number | null>(null);

  const getComments = useCallback(async () => {
    const response = id ? await getItemComments(id) : null;
    if (response) {
      setComments(response.list);
      setNextCursor(response.nextCursor);
    }
  }, [id]);

  const getMoreComments = useCallback(async () => {
    if (nextCursor === null) return;
    if (typeof id !== 'string') return;

    const response = await getItemComments(id, {
      limit: 3,
      cursor: nextCursor,
    });

    if (response) {
      setComments((prevComments) => [...(prevComments || []), ...response.list]);
      setNextCursor(response.nextCursor);
    }
  }, [id, nextCursor]);

  const moreComments = () => {
    getMoreComments();
  };

  useEffect(() => {
    getComments();
  }, [getComments]);

  if (!comments) {
    return <p>로딩 중</p>;
  }
  const renderComments = comments.length > 0 ? comments.map((value) => <ItemQuery key={value.id} query={value} />) : <EmptyQueryList />;

  return (
    <section className='flex flex-col mx-auto w-4/5'>
      {renderComments}
      {nextCursor && (
        <button className='mx-auto py-2 px-6 rounded-full text-white bg-blue-500 hover:bg-blue-700' onClick={moreComments}>
          더 보기
        </button>
      )}
    </section>
  );
};

export default ItemQueryList;
