'use server';

import { SignupFailResponse, SignupFormData, SignupResponse } from '@/types';

export async function submitSignup(formData: SignupFormData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 400) {
      const errorDetails: SignupFailResponse = await response.json();
      console.log(errorDetails.message);
      throw new Error(errorDetails?.message || '잘못된 요청입니다.');
    }
    if (!response.ok) throw new Error(response.statusText);
    const responseJson: SignupResponse = await response.json();
    return {
      response: responseJson,
      status: true,
      error: '',
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `회원가입을 실패했습니다. ${err instanceof Error ? err.message : err}`,
    };
  }
}
