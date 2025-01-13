export interface Article {
  id: number;
  title: string;
  content: string;
  images?: string[];
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  writer: { id: number; nickname: string };
}

export interface ArticleListResponse {
  totalCount: number;
  list: Article[];
}

export type ArticleSortOption = "recent" | "like";
