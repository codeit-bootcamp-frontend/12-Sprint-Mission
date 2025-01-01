export interface GetItemsParms {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

export interface GetCommentsParams {
  limit: number;
  cursor?: number | null;
}

export interface Item {
  createdAt: string;
  updatedAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface ItemDetail extends Item {
  ownerNickname: string;
  isFavorite: boolean;
  ownerImages?: string[];
}

interface Writer {
  image: string | null;
  nickname: string;
  id: number;
}

export interface Comment {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: string;
}

export interface GetItemsResponse {
  list: Item[];
  totalCount: number;
}

export interface GetCommentsResponse {
  list: Comment[];
  nextCursor: number | null;
}
