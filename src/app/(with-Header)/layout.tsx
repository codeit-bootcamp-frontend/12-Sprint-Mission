import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

function Icon() {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/assets/images/logo_img.png' alt='판다 얼굴' width={40} height={40} className='hidden md:inline' />
      <Image src='/assets/images/logo_text.png' alt='로고 문구' width={100} height={35} />
    </div>
  );
}

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-10 bg-white border-b'>
      <nav className='flex justify-between items-center px-6 h-[70px] mx-auto max-w-[1200px] '>
        <div className='flex gap-2 items-center text-gray-600 font-bold md:gap-6'>
          <Link href={'/'}>
            <Icon />
          </Link>
          <Link href={'/community'}>자유게시판</Link>
          <Link href={'/items'}>중고마켓</Link>
        </div>
        <Link href={'/'}>
          <Image src='/assets/icons/profile.svg' alt='프로필 이미지' width={40} height={40} />
        </Link>
      </nav>
    </header>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
