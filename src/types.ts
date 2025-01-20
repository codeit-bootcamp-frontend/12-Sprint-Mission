export interface Writer {
  nickname: string;
  id: number;
  image?: string;
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

export interface ArticleDetailResponse extends Article {
  isLiked: boolean;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface FetchCommentsResponse {
  nextCursor: number;
  list: Comment[];
}
