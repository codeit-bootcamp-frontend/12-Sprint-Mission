'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.name);
  }, [error]);

  return (
    <div className='flex items-center justify-center fixed inset-0'>
      <div className='flex flex-col items-center gap-8 py-12 px-12 rounded-xl bg-[rgba(191,219,254,0.5)]'>
        <p className='text-red-error'>페이지를 불러오는 중 오류가 발생했습니다.</p>
        <button className='rounded-full py-2 px-4 bg-[rgba(96,165,250,0.5)]' onClick={() => router.replace('/')}>
          홈페이지 이동하기
        </button>
        <button
          className='rounded-full py-2 px-4 bg-[rgba(96,165,250,0.5)]'
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
        >
          페이지 다시 불러오기
        </button>
      </div>
    </div>
  );
}
