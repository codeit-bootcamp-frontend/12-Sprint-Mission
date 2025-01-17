'use server';

export async function submitComment(formData: FormData, accessToken: string | null, refreshToken: string | null, id: number) {
  if (!accessToken || !refreshToken) {
    return { success: false, message: '로그인이 필요합니다.' };
  }
  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      return { success: true, message: '댓글 등록이 완료되었습니다.' };
    }
    if (response.status === 401) {
      const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });
      if (refreshResponse.ok) {
        const { accessToken: newAccessToken } = await refreshResponse.json();

        const retryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newAccessToken}`,
          },
          body: JSON.stringify(formDataObject),
        });

        if (retryResponse.ok) {
          return { success: true, message: '댓글 등록이 완료되었습니다.', accessToken: newAccessToken };
        } else {
          return { success: false, message: '댓글 등록 중 오류가 발생했습니다.' };
        }
      }

      return { success: false, message: '세션이 만료되었습니다. 다시 로그인해주세요.' };
    }

    return { success: false, message: '댓글 등록 중 오류가 발생했습니다.' };
  } catch (error) {
    console.log(error);
    return { success: false, message: '서버 요청에 실패했습니다.' };
  }
}
