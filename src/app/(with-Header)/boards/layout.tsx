import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <main className='mt-[90px]'>{children}</main>;
}
