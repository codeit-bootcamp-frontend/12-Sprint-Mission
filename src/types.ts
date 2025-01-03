export type SortOption = "recent" | "favorite";

export interface Product {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface ProductMeta {
  ownerNickname: string;
  createdAt: string;
  updatedAt?: string;
  favoriteCount: number;
}

export interface ProductDetail extends Product {
  isFavorite: boolean;
  meta: ProductMeta;
  updatedAt?: string;
}

export interface Writer {
  image?: string;
  nickname: string;
  id: number;
}

export interface Comment {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface CommentsResponse {
  nextCursor: number;
  list: Comment[];
}

export interface AddItemData {
  images?: string[];
  tags: string[];
  price: number | string;
  description: string;
  name: string;
}
