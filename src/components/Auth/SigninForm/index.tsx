'use client';

import { submitLogin } from '@/actions/submit-login';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

const SUBMIT_BTN_CLASSNAME = 'mt-4 rounded-full py-4 font-semibold text-xl text-white text-center';

interface Valid {
  email: string;
  password: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isValid: boolean;
}

export default function SigninForm() {
  const [state, action, isPending] = useActionState(submitLogin, null);
  const [valid, setValid] = useState<Valid>({ email: '', password: '', isEmailValid: true, isPasswordValid: true, isValid: false });
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

  const validateInputs = (email: string, password: string) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;
    const isValid = isEmailValid && isPasswordValid;
    return { isEmailValid, isPasswordValid, isValid };
  };

  const handleInputChange = (field: 'email' | 'password', value: string) => {
    setValid((prev) => {
      const newValidState = { ...prev, [field]: value };
      const { isEmailValid, isPasswordValid, isValid } = validateInputs(newValidState.email, newValidState.password);
      if (field === 'email') return { ...newValidState, isEmailValid, isValid };
      return { ...newValidState, isPasswordValid, isValid };
    });
  };

  return (
    <form action={action} className='flex flex-col gap-4 w-[80%]'>
      <label htmlFor='email' className='text-lg font-bold'>
        이메일
      </label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='이메일을 입력해주세요'
        className={`rounded-xl p-4 border-2 bg-gray-100 outline-none ${valid.isEmailValid ? 'border-blue-100' : 'border-red-error'}`}
        required
        aria-required
        value={valid.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      {!valid.isEmailValid && <span className='text-red-error'>잘못된 이메일입니다.</span>}
      <label htmlFor='password' className='text-lg font-bold'>
        비밀번호
      </label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='비밀번호를 입력해주세요'
        className={`rounded-xl p-4 border-2 bg-gray-100 outline-none ${valid.isPasswordValid ? 'border-blue-100' : 'border-red-error'}`}
        required
        aria-required
        value={valid.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
      />
      {!valid.isPasswordValid && <span className='text-red-error'>8자리 이상 비밀번호를 입력해주세요.</span>}
      {isPending ? (
        <div className={`${SUBMIT_BTN_CLASSNAME} bg-gray-400`}>로그인 중입니다.</div>
      ) : (
        <button className={`${SUBMIT_BTN_CLASSNAME} ${valid.isValid ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-400'}`} disabled={!valid.isValid}>
          로그인
        </button>
      )}
    </form>
  );
}
