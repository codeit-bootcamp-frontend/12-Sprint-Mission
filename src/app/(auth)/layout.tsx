import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

function Header() {
  return (
    <header className='flex justify-center items-center mt-14'>
      <Link href='/'>
        <Image src='/assets/images/auth-pages-logo.png' alt='인증 페이지 로고' width={396} height={132} priority className='w-[198px] h-[66px] md:w-[396px] md:h-[132px]' />
      </Link>
    </header>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
