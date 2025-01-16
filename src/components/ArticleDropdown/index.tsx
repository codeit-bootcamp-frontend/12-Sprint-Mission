'use client';

import Image from 'next/image';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

function List({ setOrder }: { setOrder: Dispatch<SetStateAction<string>> }) {
  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'LI') {
      setOrder(target.textContent as string);
    }
  };

  return (
    <ul className='absolute top-14 left-0 right-0 z-10 border border-gray-200 rounded-xl bg-white' onClick={onClick}>
      <li className='py-2'>최신순</li>
      <li className='py-2'>인기순</li>
    </ul>
  );
}

export default function Dropdown({ order, setOrder }: { order: string; setOrder: Dispatch<SetStateAction<string>> }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: CustomEvent<MouseEvent>) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside as EventListener);

    return () => {
      document.removeEventListener('click', handleClickOutside as EventListener);
    };
  }, []);

  return (
    <button className='flex items-center gap-4 relative border border-gray-200 rounded-xl py-2 px-5' onClick={onClick} ref={buttonRef}>
      <span className='hidden md:inline'>{order}</span>
      <Image src='/assets/icons/arrow_down.svg' alt='화살표' width={16} height={8} style={{ width: 16, height: 8 }} className='hidden md:inline' />
      <Image src='/assets/icons/sort.svg' alt='정렬 아이콘' width={24} height={24} style={{ width: 24, height: 24 }} className='inline md:hidden' />
      {isOpen ? <List setOrder={setOrder} /> : <></>}
    </button>
  );
}
