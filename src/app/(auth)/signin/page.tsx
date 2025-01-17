import SigninForm from '@/components/Auth/SigninForm';
import Link from 'next/link';

function SignupGuide() {
  return (
    <div className='flex items-center gap-2'>
      <span>판다마켓이 처음이신가요?</span>
      <Link href='/signup' className='text-blue-100 underline decoration-blue-100'>
        회원가입
      </Link>
    </div>
  );
}

function SimpleLoginContainer() {
  return (
    <div className='flex justify-between items-center w-[60%] rounded-lg py-4 px-6 bg-blue-50'>
      <span>간편 로그인하기</span>
      <div className='flex items-center gap-4'>
        <a href='https://google.com'>구글</a>
        <a href='https://www.kakaocorp.com'>카카오</a>
      </div>
    </div>
  );
}

export default function Signin() {
  return (
    <main className='flex flex-col items-center gap-6 mt-12'>
      <SigninForm />
      <SimpleLoginContainer />
      <SignupGuide />
    </main>
  );
}
