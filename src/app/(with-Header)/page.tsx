import Image from 'next/image';
import Link from 'next/link';

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
        <p className='text-2xl font-bold md:text-4xl max-w-[200px] md:max-w-[500px] pc:max-w-[300px]'>일상의 모든 물건을 거래해 보세요</p>
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
      <BottomBanner />
    </main>
  );
}
