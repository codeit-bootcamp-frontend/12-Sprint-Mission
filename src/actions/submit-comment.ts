'use server';
import apiClient from '@/utils/apiClient';
import { AxiosError } from 'axios';
import { Comment, CommentWithAccessToken } from '@/types';

interface SubmitCommentResponse {
  success: boolean;
  message: string;
  accessToken?: string;
}

export async function submitComment(formData: FormData, accessToken: string | null, refreshToken: string | null, id: number): Promise<SubmitCommentResponse> {
  if (!accessToken || !refreshToken) {
    return { success: false, message: '로그인이 필요합니다.' };
  }
  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await apiClient.post<Comment | CommentWithAccessToken>(`/articles/${id}/comments`, formDataObject, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'x-refresh-token': refreshToken,
      },
    });
    const result: SubmitCommentResponse = { success: true, message: '댓글 등록이 완료되었습니다.' };
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

    return { success: false, message: '댓글 등록 중 오류가 발생했습니다.' };
  }
}
