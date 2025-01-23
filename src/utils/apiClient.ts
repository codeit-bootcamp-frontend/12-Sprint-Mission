import { Comment, CommentWithAccessToken } from '@/types';
import axios, { AxiosError, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse<Comment>) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      const refreshToken: string = error?.config?.headers?.['x-refresh-token'] ?? '';
      if (refreshToken) {
        try {
          const refreshResponse = await axios.post<{ accessToken: string }>(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, { refreshToken });

          const { accessToken: newAccessToken } = refreshResponse.data;

          if (error.config) {
            error.config.headers['Authorization'] = `baerer ${newAccessToken}`;
            const response: AxiosResponse<CommentWithAccessToken> = await apiClient.request(error.config);
            response.data.accessToken = newAccessToken;
            return response;
          }
        } catch (refreshError) {
          console.error('리프레시 토큰 생성 실패 : ', refreshError);
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
