'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Icon() {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/assets/images/logo_img.png' alt='판다 얼굴' width={40} height={40} className='hidden md:inline' style={{ width: 40, height: 40 }} />
      <Image src='/assets/images/logo_text.png' alt='로고 문구' width={100} height={26} style={{ width: 100, height: 26 }} />
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed top-0 left-0 right-0 z-10 bg-white border-b'>
      <nav className='flex justify-between items-center px-6 h-[70px] mx-auto max-w-[1200px] '>
        <div className='flex gap-2 items-center text-gray-600 font-bold md:gap-6'>
          <Link href={'/'}>
            <Icon />
          </Link>
          <Link href={'/boards'} className={pathname === '/boards' ? 'text-blue-100' : 'text-black'}>
            자유게시판
          </Link>
          <Link href={'/items'} className={pathname === '/items' ? 'text-blue-100' : 'text-black'}>
            중고마켓
          </Link>
        </div>
        <Link href={'/'}>
          <Image src='/assets/icons/profile.svg' alt='프로필 이미지' width={40} height={40} style={{ width: 40, height: 40 }} />
        </Link>
      </nav>
    </header>
  );
}
