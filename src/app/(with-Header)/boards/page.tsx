import BestArticleList from '@/components/BestArticleList';
import { Suspense } from 'react';
import ArticleContent from '@/components/ArticleContent';
import Link from 'next/link';

function SkeletonUi({ cnt }: { cnt: number }) {
  return (
    <>
      {Array.from({ length: cnt }).map((_, i) => (
        <div key={i} className='flex flex-col gap-6 rounded-lg p-6 bg-gray-100'>
          <div className='w-[102px] h-[30px] bg-gray-200'></div>
          <div className='flex gap-2 justify-between'>
            <div className='w-[256px] h-[64px] bg-gray-200'></div>
            <div className='w-[72px] h-[72px] bg-gray-200'></div>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <div className='w-14 h-6 bg-gray-200'></div>
              <div className='flex items-center gap-1'>
                <div className='w-3.5 h-3.5 bg-gray-200'></div>
                <div className='w-12 h-4 bg-gray-200'></div>
              </div>
            </div>
            <div className='w-20 h-4 bg-gray-200'></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Boards() {
  return (
    <>
      <section className='max-w-[1200px] mx-auto px-6'>
        <p className='text-xl text-gray-900 font-bold'>베스트 게시글</p>
        <div className='md:flex md:gap-6'>
          <Suspense
            fallback={
              <>
                <SkeletonUi cnt={3} />
              </>
            }
          >
            <BestArticleList />
          </Suspense>
        </div>
      </section>
      <section className='max-w-[1200px] mt-6 mx-auto px-6'>
        <div className='flex items-center'>
          <p className='flex-1 text-xl text-gray-900 font-bold'>게시글</p>
          <Link href='/addboard' className='rounded-lg py-3 px-6 bg-blue-100 font-semibold text-white'>
            글쓰기
          </Link>
        </div>
        <Suspense
          fallback={
            <>
              <div className='flex flex-col items-center mt-4 my-12'>
                <SkeletonUi cnt={5} />
              </div>
            </>
          }
        >
          <ArticleContent />
        </Suspense>
      </section>
    </>
  );
}
