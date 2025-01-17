import { DetailArticle } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import dayjs from 'dayjs';
import CommentForm from '@/components/CommentForm';

async function Title({ id }: { id: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
    next: {
      tags: [`detail-article-${id}`],
    },
  });
  if (!response.ok) {
    if (response.status === 404) notFound();
  }

  const article: DetailArticle = await response.json();
  const date = dayjs(article.createdAt).format('YYYY. MM. DD');

  return (
    <section className='flex flex-col gap-4 mx-auto max-w-[1200px] px-6'>
      <div className='flex flex-col gap-2 border-b py-4'>
        <p className='text-xl font-bold text-gray-800'>{article.title}</p>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-4 mr-4 border-r pr-4'>
            {article.image && <Image src={article.image} alt='게시글 작성자 프로필 이미지' width={40} height={40} className='rounded-full' />}
            <span className='text-sm font-medium text-gray-600'>{article.writer.nickname}</span>
            <span className='text-sm font-medium text-gray-400'>{date}</span>
          </div>
          <div className='flex items-center gap-2 border rounded-full py-2 px-4'>
            <Image src='/assets/icons/heart_empty.svg' alt='좋아요 이미지' width={24} height={20} />
            <span className='font-medium text-gray-500'>{article.likeCount}</span>
          </div>
        </div>
      </div>
      <p className='text-lg text-gray-800'>{article.content}</p>
    </section>
  );
}

export default async function DetailBoard({ params }: { params: Promise<{ id: string }> }) {
  const articleId = (await params).id;

  return (
    <main className='mt-[90px]'>
      <Title id={articleId} />
      <CommentForm id={articleId} />
    </main>
  );
}
