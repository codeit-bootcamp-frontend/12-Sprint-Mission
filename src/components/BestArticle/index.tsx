'use client';

import Image from 'next/image';
import { Article } from '@/types';
import dayjs from 'dayjs';
import { useState } from 'react';

const DEFAULT_IMAGE = '/assets/icons/profile.svg';

export default function BestArticle({ article }: { article: Article }) {
  const [imageUrl, setImageUrl] = useState(article.image ?? DEFAULT_IMAGE);
  const date = dayjs(article.createdAt).format('YYYY. MM. DD');

  return (
    <div className='flex flex-col gap-6 rounded-lg p-6 bg-gray-50'>
      <Image src='/assets/icons/badge.svg' alt='Best 뱃지 이미지' width={102} height={30} style={{ width: 102, height: 30 }} />
      <div className='flex gap-2 justify-between'>
        <p className='text-xl font-semibold'>{article.content}</p>
        <div className='shrink-0 flex justify-center items-center w-[72px] h-[72px] border rounded-md bg-white'>
          <Image src={imageUrl} alt='상품 이미지' width={48} height={48} style={{ width: 48, height: 48 }} unoptimized onError={() => setImageUrl(DEFAULT_IMAGE)} />
        </div>
      </div>
      <div className='flex justify-between text-sm'>
        <div className='flex gap-4 text-gray-600'>
          <p>{article.writer.nickname}</p>
          <div className='flex items-center gap-1'>
            <Image src='/assets/icons/heart_empty.svg' alt='빈 하트 이미지' width={16} height={16} style={{ width: 16, height: 16 }} />
            <p>{article.likeCount}</p>
          </div>
        </div>
        <p className='text-gray-400'>{date}</p>
      </div>
    </div>
  );
}
