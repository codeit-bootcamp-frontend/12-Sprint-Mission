import BestArticleList from '@/components/BestArticleList';

export default async function Boards() {
  return (
    <section className='max-w-[1200px] mx-auto px-6'>
      <p className='text-xl text-gray-900 font-bold'>베스트 게시글</p>
      <div className='md:flex md:gap-6'>
        <BestArticleList />
      </div>
    </section>
  );
}
