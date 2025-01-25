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

export interface PostPayload {
  title: string;
  content: string;
  image?: File | null;
}

export interface SignupRequest {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignupResponse {
  user: {
    id: number;
    email: string;
    image: null;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: number;
    email: string;
    image: null;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
  accessToken: string;
  refreshToken: string;
}
