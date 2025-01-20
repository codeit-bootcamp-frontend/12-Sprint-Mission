import { getArticles } from '@/api/articles';
import BestArticle from '@/components/BestArticleList/BestArticle';

const REVALIDATE_SEC = 60;

export default async function BestArticleList() {
  const { list } = await getArticles(
    {
      pageSize: 3,
      orderBy: 'like',
    },
    {
      next: {
        revalidate: REVALIDATE_SEC,
      },
    },
  );

  return (
    <div className='md:flex md:gap-6 w-[100%]'>
      {list.map((article, i) => {
        let className = '';
        if (i === 1) className = 'hidden md:flex';
        else if (i === 2) className = 'hidden pc:flex';

        return <BestArticle key={article.id} article={article} className={className} />;
      })}
    </div>
  );
}
