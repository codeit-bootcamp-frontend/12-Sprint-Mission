'use client';

import { submitLogin } from '@/actions/submit-login';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

const SUBMIT_BTN_CLASSNAME = 'mt-4 rounded-full py-4 bg-gray-400 font-semibold text-xl text-white';

export default function SigninForm() {
  const [state, action, isPending] = useActionState(submitLogin, null);
  const router = useRouter();
  const { setAccessToken } = useAuthStore();

  useEffect(() => {
    if (state && !state.status) alert(state.error);
    if (state?.response && 'accessToken' in state?.response) {
      localStorage.setItem('accessToken', state.response.accessToken);
      localStorage.setItem('refreshToken', state.response.refreshToken);
      setAccessToken(state.response.accessToken);
      router.replace('/');
    }
  }, [state, router, setAccessToken]);

  return (
    <form action={action} className='flex flex-col gap-4 w-[60%]'>
      <label htmlFor='email' className='text-lg font-bold'>
        이메일
      </label>
      <input type='email' name='email' id='email' placeholder='이메일을 입력해주세요' className='rounded-xl p-4 bg-gray-100 focus:outline-blue-100' required aria-required />
      <label htmlFor='password' className='text-lg font-bold'>
        비밀번호
      </label>
      <input type='password' name='password' id='password' placeholder='비밀번호를 입력해주세요' className='rounded-xl p-4 bg-gray-100 focus:outline-blue-100' required aria-required />
      {isPending ? <div className={SUBMIT_BTN_CLASSNAME}>로그인 중입니다.</div> : <button className={SUBMIT_BTN_CLASSNAME}>로그인</button>}
    </form>
  );
}
