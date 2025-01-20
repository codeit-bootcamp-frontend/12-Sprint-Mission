'use client';

import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Comment, Comments } from '@/types';
import getDiffTime from '@/utils/getDiffTime';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { isEmpty } from 'es-toolkit/compat';

function EmptyCommentList() {
  return (
    <div className='flex flex-col items-center text-gray-400'>
      <Image src='/assets/images/Img_reply_empty.png' alt='댓글 없음 이미지' width={140} height={140} />
      <p>아직 댓글이 없어요</p>
      <p>지금 댓글을 달아보세요!</p>
    </div>
  );
}

function MovePageBtn() {
  const router = useRouter();
  return (
    <button className='flex items-center my-4 rounded-full py-2 px-4 bg-blue-100 mx-auto' onClick={() => router.push('/boards')}>
      <span className='text-lg font-semibold text-white'>목록으로 돌아가기</span>
      <Image src='/assets/icons/back_symbol.svg' alt='/boards 페이지 이동 아이콘' width={20} height={16} />
    </button>
  );
}

const getLimit = () => {
  const screenHeight = window.innerHeight;
  if (screenHeight <= 600) {
    return 5;
  }
  if (screenHeight <= 1200) {
    return 10;
  }
  return 15;
};

function ArticleComment({ comment }: { comment: Comment }) {
  const date = getDiffTime(comment.updatedAt);
  return (
    <div className='flex flex-col gap-4 border-b py-4'>
      <p className='text-sm text-gray-800'>{comment.content}</p>
      <div className='flex items-center gap-2'>
        <Image src={comment.writer.image ?? '/assets/icons/profile.svg'} alt='작성자 프로필 이미지' width={32} height={32} />
        <div className='flex flex-col gap-1'>
          <span className='text-xs text-gray-600'>{comment.writer.nickname}</span>
          <span className='text-xs text-gray-400'>{date}</span>
        </div>
      </div>
    </div>
  );
}

function SkeletonComment() {
  return (
    <div className='flex flex-col gap-4 border-b py-4 animate-pulse'>
      <div className='h-4 bg-gray-200 w-3/4 rounded'></div>
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 rounded-full bg-gray-200'></div>
        <div className='flex flex-col gap-1'>
          <div className='w-16 h-3 bg-gray-200 rounded'></div>
          <div className='w-20 h-3 bg-gray-200 rounded'></div>
        </div>
      </div>
    </div>
  );
}

export default function ArticleCommentList({ id }: { id: number }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px',
  });

  const getComments = async (cursor?: number): Promise<Comments> => {
    try {
      const limit = getLimit();
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments?cursor=${cursor ?? ''}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('데이터를 가져올 수 없습니다.');
      }
      return await response.json();
    } catch (e) {
      console.error(e);
      return { list: [], nextCursor: null };
    }
  };

  const { data, fetchNextPage, isLoading, isFetching } = useInfiniteQuery<Comments>({
    queryKey: ['article-comments', id],
    queryFn: ({ pageParam = 0 }) => getComments(pageParam as number),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className='flex flex-col mx-auto w-[100%] max-w-[1200px] px-6'>
        {Array.from({ length: 3 }, (_, i) => (
          <SkeletonComment key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className='flex flex-col mx-auto w-[100%] max-w-[1200px] px-6'>
      {isEmpty(data?.pages[0]?.list) ? (
        <EmptyCommentList />
      ) : (
        data?.pages.map((page, index) => (
          <div key={index}>
            {page.list.map((comment) => (
              <ArticleComment key={comment.id} comment={comment} />
            ))}
          </div>
        ))
      )}

      {isFetching && (
        <div className='flex justify-center items-center py-4'>
          <div className='w-8 h-8 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin'></div>
        </div>
      )}
      <MovePageBtn />

      <div ref={ref} className='h-4'></div>
    </div>
  );
}
