export interface ArticlesParam {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'like';
  keyword?: string;
}

interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface SigninSuccessResponse {
  user: {
    id: number;
    nickname: string;
    image: null;
    createdAt: string;
    updatedAt: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface SigninFailResponse {
  message: string;
  details: {
    email?: {
      message: string;
    };
    password?: {
      message: string;
    };
  };
}

export interface ArticleFormData {
  title: string;
  content: string;
  image: File | null;
}

export interface DetailArticle extends Article {
  isLiked: boolean;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer & { image: null | string };
}

export interface Comments {
  list: Comment[];
  nextCursor: null | string;
}
