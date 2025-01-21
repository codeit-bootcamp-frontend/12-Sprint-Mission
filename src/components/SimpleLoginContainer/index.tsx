import Image from 'next/image';

export default function SimpleLoginContainer() {
  return (
    <div className='flex justify-between items-center w-[80%] rounded-lg py-4 px-6 bg-blue-50'>
      <span>간편 로그인하기</span>
      <div className='flex items-center gap-4'>
        <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
          <Image src='/assets/icons/ic_google.svg' alt='구글 로고' width={40} height={40} />
        </a>
        <a href='https://kakao.com' target='_blank' rel='noopener noreferrer'>
          <Image src='/assets/icons/ic_kakao.svg' alt='카카오 로고' width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
