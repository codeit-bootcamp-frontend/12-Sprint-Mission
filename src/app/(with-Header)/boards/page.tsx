import BestArticleList from '@/components/BestArticleList';
import Searchbar from '@/components/ArticleSearchbar';
import Dropdown from '@/components/ArticleDropdown';
import ArticleList from '@/components/ArticleList';

export default async function Boards() {
  return (
    <>
      <section className='max-w-[1200px] mx-auto px-6'>
        <p className='text-xl text-gray-900 font-bold'>베스트 게시글</p>
        <div className='md:flex md:gap-6'>
          <BestArticleList />
        </div>
      </section>
      <section className='max-w-[1200px] mt-6 mx-auto px-6'>
        <div className='flex items-center'>
          <p className='flex-1 text-xl text-gray-900 font-bold'>게시글</p>
          <button className='rounded-lg py-3 px-6 bg-blue-100 font-semibold text-white'>글쓰기</button>
        </div>
        <div className='flex items-center gap-6 mt-4'>
          <Searchbar />
          <Dropdown />
        </div>
        <div className='flex flex-col items-center mt-4 my-12'>
          <ArticleList />
        </div>
      </section>
    </>
  );
}
