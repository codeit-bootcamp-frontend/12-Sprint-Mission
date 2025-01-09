'use client';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
export default function Searchbar() {
  const router = useRouter();
  const searchParmas = useSearchParams();
  const [search, setSearch] = useState('');

  const q = searchParmas.get('q');

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/boards?q=${search}`);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit();
  };

  return (
    <div className='flex-1 flex items-center gap-2 rounded-xl px-4 py-2 bg-gray-100'>
      <label htmlFor='article-search'>
        <Image src='/assets/icons/search.svg' alt='검색 아이콘' width={16} height={16} style={{ width: 16, height: 16 }} />
      </label>
      <input type='text' id='article-search' placeholder='검색할 상품을 입력해주세요' className='bg-gray-100 outline-none' value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
    </div>
  );
}
