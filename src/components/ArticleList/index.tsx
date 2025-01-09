'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { getArticles } from '@/api/articles';
import ArticleItem from '@/components/ArticleItem';
import { Article } from '@/types';

interface List {
  articles: Article[];
  loading: boolean;
}

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

export default function ArticleList({ order, q }: { order: string; q: string | undefined }) {
  const [list, setList] = useState<List>({ articles: [], loading: true });
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(Infinity);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPage(1);
    setTotal(Infinity);
  }, [order, q]);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!isFinite(total)) window.scrollTo(0, 0);
      if (total <= (page - 1) * 5) return;
      setList((prevList) => ({ ...prevList, loading: true }));
      try {
        const orderBy = order === '최신순' ? 'recent' : 'like';
        const keyword = q ? q : '';
        const { list, totalCount } = await getArticles({
          page,
          pageSize: 5,
          orderBy,
          keyword,
        });
        setTotal(totalCount);
        setList((prevList) => ({
          articles: page === 1 ? list : [...prevList.articles, ...list.filter((newArticle) => !prevList.articles.some((existingArticle) => existingArticle.id === newArticle.id))],
          loading: false,
        }));
      } catch (error) {
        console.error('Error fetching articles:', error);
        setList((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchArticles();
  }, [page, total, q]);

  const loadMore = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && list.loading === false) {
        setPage((prev) => (prev += 1));
      }
    },
    [list.loading],
  );

  useEffect(() => {
    if (list.loading) return;

    const observer = new IntersectionObserver(loadMore, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [list.loading, loadMore]);

  return (
    <div className='flex flex-col gap-6 w-[100%]'>
      {list.articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
      {list.loading && <SkeletonUi cnt={5} />}

      <div ref={observerRef} className='h-4'></div>
    </div>
  );
}
