import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='flex flex-wrap justify-around items-center px-4 h-[160px] bg-gray-900'>
      <nav className='flex gap-6 md:order-2'>
        <Link href='/privacy' className='text-gray-200'>
          Privacy Policy
        </Link>
        <Link href='/faq' className='text-gray-200'>
          FAQ
        </Link>
      </nav>

      <nav className='flex gap-2 items-center md:order-3'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <Image src='/assets/icons/ic_facebook.svg' alt='페이스북 아이콘' width={20} height={20} />
        </a>
        <a href='https://x.com' target='_blank' rel='noopener noreferrer'>
          <Image src='/assets/icons/ic_twitter.svg' alt='트위터 아이콘' width={20} height={20} />
        </a>
        <a href='https://yotube.com' target='_blank' rel='noopener noreferrer'>
          <Image src='/assets/icons/ic_youtube.svg' alt='유튜브 아이콘' width={20} height={20} />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <Image src='/assets/icons/ic_instagram.svg' alt='인스타그램 아이콘' width={20} height={20} />
        </a>
      </nav>

      <span className='w-[100%] text-gray-400 md:w-auto md:order-1'>@codeit - 2024</span>
    </footer>
  );
}

interface Content {
  keyword: string;
  subTitle1: string;
  subTitle2: string;
  explain1: string;
  explain2: string;
}

const CONTENT_SECTION: Content[] = [
  {
    keyword: 'Hot item',
    subTitle1: '인기 상품을 ',
    subTitle2: '확인해 보세요',
    explain1: '가장 HOT한 중고거래 물품을',
    explain2: '판다 마켓에서 확인해 보세요',
  },
  {
    keyword: 'Search',
    subTitle1: '구매를 원하는 ',
    subTitle2: '상품을 검색하세요',
    explain1: '구매하고 싶은 물품을 검색해서',
    explain2: '쉽게 찾아보세요',
  },
  {
    keyword: 'Register',
    subTitle1: '판매를 원하는 ',
    subTitle2: '상품을 등록하세요',
    explain1: '어떤 물건이든 판매하고 싶은 상품을',
    explain2: '쉽게 등록하세요',
  },
];

function ContentList() {
  function makeContent(index: number) {
    return (
      <section className='flex flex-col gap-4 mb-12 px-6 md:flex-row md:items-center md:justify-center md:my-40'>
        <Image
          src={`/assets/images/home-section${index + 1}.png`}
          alt='내용 설명 이미지'
          width={720}
          height={540}
          className={`md:w-[400px] md:h-[300px] pc:w-[540px] pc:h-[400px] ${index % 2 === 1 && 'md:order-1'}`}
        />
        <div className='flex flex-col gap-4'>
          <p className='text-blue-100 font-bold'>{CONTENT_SECTION[index].keyword}</p>
          <p className='text-2xl text-gray-700 font-bold md:text-4xl md:flex md:flex-col'>
            <span>{CONTENT_SECTION[index].subTitle1}</span>
            <span>{CONTENT_SECTION[index].subTitle2}</span>
          </p>
          <p className='flex flex-col md:text-xl'>
            <span>{CONTENT_SECTION[index].explain1}</span>
            <span>{CONTENT_SECTION[index].explain2}</span>
          </p>
        </div>
      </section>
    );
  }
  return Array.from({ length: 3 }, (_, index) => makeContent(index));
}

function BottomBanner() {
  return (
    <section className='flex flex-col justify-center items-center gap-6 pt-[40px] bg-blue-40 pc:flex-row pc:pt-[120px]'>
      <div className='flex flex-col items-center mt-[80px]'>
        <p className='text-2xl font-bold md:text-4xl'>믿을 수 있는</p>
        <p className='text-2xl font-bold md:text-4xl'>판다마켓 중고 거래</p>
      </div>

      <Image src='/assets/images/home_bottom_banner.png' alt='상단 배너 이미지' width={746} height={340} />
    </section>
  );
}

function TopBanner() {
  return (
    <section className='flex flex-col justify-center items-center gap-6 pt-[40px] bg-blue-40 pc:flex-row pc:pt-[120px]'>
      <div className='flex flex-col gap-6 mt-[80px]'>
        <p className='text-2xl font-bold md:text-4xl max-w-[200px] text-center md:max-w-[500px] pc:max-w-[300px]'>일상의 모든 물건을 거래해 보세요</p>
        <Link href={'/items'} className='rounded-full py-2 px-4 bg-blue-100 text-center text-white'>
          구경하러 가기
        </Link>
      </div>

      <Image src='/assets/images/home_top_banner.png' alt='상단 배너 이미지' width={746} height={340} />
    </section>
  );
}

export default function Home() {
  return (
    <main className='mt-[70px]'>
      <TopBanner />
      <ContentList />
      <BottomBanner />
      <Footer />
    </main>
  );
}
