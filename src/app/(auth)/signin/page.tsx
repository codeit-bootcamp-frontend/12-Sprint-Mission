import SigninForm from '@/components/Auth/SigninForm';
import Link from 'next/link';
import SimpleLoginContainer from '@/components/SimpleLoginContainer';

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

export default function Signin() {
  return (
    <main className='flex flex-col items-center gap-6 mt-12 mx-auto max-w-[1200px]'>
      <SigninForm />
      <SimpleLoginContainer />
      <SignupGuide />
    </main>
  );
}
