'use server';
import { Article, ResponseWithAccessToken } from '@/types';
import apiHelper from '@/utils/apiHelper';
import { AxiosError } from 'axios';

interface submitArticleResponse {
  success: boolean;
  message: string;
  accessToken?: string;
  id?: number;
}

export async function submitArticle(formData: FormData, accessToken: string | null, refreshToken: string | null): Promise<submitArticleResponse> {
  if (!accessToken || !refreshToken) {
    return { success: false, message: '로그인이 필요합니다.' };
  }
  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await apiHelper.post<Article | ResponseWithAccessToken<Article>>('/articles', formDataObject, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'x-refresh-token': refreshToken,
      },
    });

    const result: submitArticleResponse = { success: true, message: '게시글 생성이 완료되어 3초 후 페이지를 이동합니다.', id: response.data.id };
    if ('accessToken' in response.data) {
      const newAccessToken = response.data.accessToken as string;
      result.accessToken = newAccessToken;
    }
    return result;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError && error.message.includes('리프레시')) {
      return { success: false, message: '세션이 만료되었습니다. 다시 로그인해주세요.' };
    }
    return { success: false, message: '게시글 생성 중 오류가 발생했습니다.' };
  }
}
