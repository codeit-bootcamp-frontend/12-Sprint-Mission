import { Suspense } from 'react';
import { getArticles } from '@/api/articles';
import BestArticle from '@/components/BestArticle';

async function BestList() {
  const { list } = await getArticles({
    page: 1,
    pageSize: 3,
    orderBy: 'like',
  });
  return list.map((article) => <BestArticle key={article.id} article={article} />);
}

export default async function Boards() {
  return (
    <section className='max-w-[1200px] mx-auto px-6'>
      <p className='text-xl text-gray-900 font-bold'>베스트 게시글</p>
      <div className='flex gap-6 '>
        <Suspense>
          <BestList />
        </Suspense>
      </div>
    </section>
  );
}
