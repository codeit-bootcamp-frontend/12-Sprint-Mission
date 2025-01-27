export interface Writer {
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

export interface BoardListResponse {
  list: Article[];
  totalCount: number;
}
export interface Review extends Article {
  isLiked: boolean;
}

export interface CommentWriter {
  id: number;
  nickname: string;
  image: string | null;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: CommentWriter;
}

export interface CommentListResponse {
  list: Comment[];
  nextCursor: string | null;
}