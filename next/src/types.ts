export interface Post {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface Posts<T> {
  list: T[];
  totalCount: number;
}

export type OrderByValue = "recent" | "like";

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
  isLiked: boolean;
}

export interface Comments<T> {
  list: T[];
  nextCursor: number;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image?: string;
  };
}
