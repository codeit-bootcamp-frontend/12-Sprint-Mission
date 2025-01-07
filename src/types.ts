// 상품 타입
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  favoriteCount: number;
  images: string[];
  tags: string[];
}

// 여러 상품을 가져오는 API 응답 타입
export interface ProductResponse {
  list: Product[];
  totalCount: number;
}

// 상품 댓글 타입
export interface Comment {
  id: string;
  user: string;
  writer: User;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: number;
  nickname: string;
  image: string;
}
