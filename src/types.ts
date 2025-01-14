export interface Writer {
  nickname: string;
  id: number;
}

export interface Article {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}

export interface FetchArticlesResponse {
  totalCount: number;
  list: Article[];
}
