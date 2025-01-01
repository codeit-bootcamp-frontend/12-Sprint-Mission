import emptyProfileImg from '@/assets/images/ic_profile.svg';
import dropdownIcon from '@/assets/images/ic_kebab.svg';
import { useState } from 'react';
import { Comment } from '@/api/types';

const getTime = (updatedAt: string) => {
  const updateDate = new Date(updatedAt);
  const currentDate = new Date();
  let diffDay = (currentDate.getTime() - updateDate.getTime()) / (1000 * 24 * 60 * 60);
  let diffHour = diffDay / 24;
  let diffMinute = diffHour / 60;
  let diffSec = diffMinute / 60;
  let time = `${Math.floor(diffDay)}일 전`;
  if (diffDay < 1) {
    if (diffHour < 1) {
      if (diffMinute < 1) time = `${Math.floor(diffSec)}초 전`;
      else time = `${Math.floor(diffMinute)}분 전`;
    } else time = `${Math.floor(diffHour)}시간 전`;
  }
  return time;
};

const ItemQuery = ({ query }: { query: Comment }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { content, updatedAt, writer } = query;
  const { nickname, image } = writer;
  const imgSrc = image ?? emptyProfileImg;
  const time = getTime(updatedAt);

  const clickDropdownHandler = () => {
    setIsDropdown((prev) => !prev);
  };

  return (
    <div className='flex flex-col relative border-b border-gray-200 mb-4 pb-4'>
      <p>{content}</p>
      <img src={dropdownIcon} alt='드롭다운 이미지' className='absolute top-0 right-0 cursor-pointer hover:bg-gray-200' onClick={clickDropdownHandler} />
      {isDropdown && (
        <ul className='absolute top-8 right-0 bg-white'>
          <li className='border border-b-0 border-gray-300 rounded-t-lg py-2 px-6 text-gray-500 cursor-pointer hover:bg-gray-100'>수정하기</li>
          <li className='border border-t-0 border-gray-300 rounded-b-lg py-2 px-6 text-gray-500 cursor-pointer hover:bg-gray-100'>삭제하기</li>
        </ul>
      )}
      <div className='flex items-center gap-4 mt-4'>
        <img src={imgSrc} alt='프로필 이미지' className='rounded-full w-10 h-10' />
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-gray-500'>{nickname}</p>
          <p className='text-xs text-gray-400'>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemQuery;
