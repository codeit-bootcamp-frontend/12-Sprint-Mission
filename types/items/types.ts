import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ParamsId {
  productId: string | undefined;
}

export interface ProductDataProps {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string | StaticImport;
  isFavorite: boolean;
  name: string;
  ownerId: number;
  ownerNickname: string;
  price: number;
  tags: string[];
  updatedAt: string;
}

interface ListWriter {
  id: number;
  image?: string | null;
  nickname: string;
}

interface ListComment {
  content: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  writer: ListWriter;
}

export interface CommentDataProps {
  list: ListComment[];
  nextCursor: number;
}
