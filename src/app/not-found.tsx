'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center fixed inset-0'>
      <div className='flex flex-col items-center gap-8 py-12 px-12 rounded-xl bg-[rgba(191,219,254,0.5)]'>
        <p className='text-red-error'>올바르지 않은 경로에 접속하셨습니다.</p>
        <button className='rounded-full py-2 px-4 bg-[rgba(96,165,250,0.5)]' onClick={() => router.replace('/')}>
          홈페이지 이동
        </button>
      </div>
    </div>
  );
}
