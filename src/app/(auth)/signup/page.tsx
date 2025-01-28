import SignupForm from '@/components/Auth/SignupForm';
import SimpleLoginContainer from '@/components/SimpleLoginContainer';
import Link from 'next/link';

function SigninGuide() {
  return (
    <div className='flex justify-center items-center gap-2 w-[80%]'>
      <span className='text-gray-800 font-medium'>이미 회원이신가요?</span>
      <Link href='/signin' className='text-blue-100 underline decoration-blue-100'>
        로그인
      </Link>
    </div>
  );
}

export default function Signup() {
  return (
    <main className='flex flex-col items-center gap-6 mt-12 mx-auto max-w-[1200px]'>
      <SignupForm />
      <SimpleLoginContainer />
      <SigninGuide />
    </main>
  );
}
