'use client';

import Image from 'next/image';
import { Article } from '@/types';
import dayjs from 'dayjs';
import { useState } from 'react';
import Link from 'next/link';

const DEFAULT_IMAGE = '/assets/icons/profile.svg';

export default function ArticleItem({ article }: { article: Article }) {
  const [imageUrl, setImageUrl] = useState(article.image ?? DEFAULT_IMAGE);
  const date = dayjs(article.createdAt).format('YYYY. MM. DD');

  return (
    <Link href={`/board/${article.id}`} className='flex flex-col gap-6 rounded-lg p-6 bg-gray-50 cursor-pointer'>
      <div className='flex gap-2 justify-between'>
        <p className='text-xl font-semibold'>{article.title}</p>
        <div className='shrink-0 flex justify-center items-center w-[72px] h-[72px] border rounded-md bg-white'>
          <Image src={imageUrl} alt='상품 이미지' width={48} height={48} style={{ width: 48, height: 48 }} unoptimized onError={() => setImageUrl(DEFAULT_IMAGE)} />
        </div>
      </div>
      <div className='flex justify-between text-sm'>
        <div className='flex gap-4 items-center text-gray-600'>
          <Image src='/assets/icons/profile.svg' alt='프로필 이미지' width={48} height={48} style={{ width: 48, height: 48 }} />
          <p>{article.writer.nickname}</p>
          <p className='text-gray-400'>{date}</p>
        </div>
        <div className='flex items-center gap-1'>
          <Image src='/assets/icons/heart_empty.svg' alt='빈 하트 이미지' width={16} height={16} style={{ width: 16, height: 16 }} />
          <p>{article.likeCount}</p>
        </div>
      </div>
    </Link>
  );
}
