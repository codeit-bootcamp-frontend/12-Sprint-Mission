import { ResponseWithAccessToken } from '@/types';
import axios, { AxiosError, AxiosResponse } from 'axios';

const apiHelper = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiHelper.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => response,
  async <T>(error: AxiosError) => {
    if (error.response?.status === 401) {
      const refreshToken: string = error?.config?.headers?.['x-refresh-token'] ?? '';
      if (refreshToken) {
        try {
          const refreshResponse = await axios.post<{ accessToken: string }>(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, { refreshToken });

          const { accessToken: newAccessToken } = refreshResponse.data;

          if (error.config) {
            error.config.headers['Authorization'] = `baerer ${newAccessToken}`;
            const response: AxiosResponse<ResponseWithAccessToken<T>> = await apiHelper.request(error.config);
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

export default apiHelper;
