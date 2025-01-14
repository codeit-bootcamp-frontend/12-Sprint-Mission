import React from "react";

export interface ParamsId {
  productId: string | undefined;
}

export interface TProductDataProps {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images?: React.ImgHTMLAttributes | null;
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

export interface TCommentDataProps {
  list: ListComment[];
  nextCursor: number;
}
