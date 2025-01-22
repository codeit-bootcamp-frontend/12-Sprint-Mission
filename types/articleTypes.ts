export interface Article {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  writer: {
    nickname: string;
  };
  image: string | null;
  createdAt: string;
}

export interface ArticleListResponse {
  totalCount: number;
  list: Article[];
}
