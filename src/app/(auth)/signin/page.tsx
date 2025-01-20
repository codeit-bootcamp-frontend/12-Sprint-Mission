import SigninForm from '@/components/Auth/SigninForm';
import Link from 'next/link';
import Image from 'next/image';

function SignupGuide() {
  return (
    <div className='flex justify-center items-center gap-2 w-[80%]'>
      <span className='text-gray-800 font-medium'>판다마켓이 처음이신가요?</span>
      <Link href='/signup' className='text-blue-100 underline decoration-blue-100'>
        회원가입
      </Link>
    </div>
  );
}

function SimpleLoginContainer() {
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

export default function Signin() {
  return (
    <main className='flex flex-col items-center gap-6 mt-12 mx-auto max-w-[1200px]'>
      <SigninForm />
      <SimpleLoginContainer />
      <SignupGuide />
    </main>
  );
}
