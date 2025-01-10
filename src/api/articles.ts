import { ArticlesParam, Article } from '@/types';

export async function getArticles(query: ArticlesParam = {}, option: RequestInit = {}): Promise<{ list: Article[]; totalCount: number }> {
  const queryParam = new URLSearchParams(Object.entries(query)).toString();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?${queryParam}`, option);
  if (!response.ok) throw new Error(`게시글을 불러 올 수 없음 : ${response.statusText}`);
  return await response.json();
}
