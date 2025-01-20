'use server';

import { SigninFailResponse, SigninSuccessResponse } from '@/types';

// 이전 상태는 사용안하므로 임시 any로 지정
// eslint-disable-next-line
export async function submitLogin(_: any, formData: FormData) {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password)
    return {
      status: false,
      error: '이메일과 비밀번호를 입력해주세요',
    };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 400) {
      const errorDetails = await response.json();
      throw new Error(errorDetails?.message || '잘못된 요청입니다.');
    }
    if (!response.ok) throw new Error(response.statusText);
    const responseJson: SigninSuccessResponse | SigninFailResponse = await response.json();
    return {
      response: responseJson,
      status: true,
      error: '',
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `로그인을 실패했습니다. ${err instanceof Error ? err.message : err}`,
    };
  }
}
