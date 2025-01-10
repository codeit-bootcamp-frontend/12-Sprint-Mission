import { BaseData } from "./common";

export type Tags = string[];

export type Product = BaseData & {
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: Tags;
  price: number;
  description: string;
  name: string;
  isFavorite: boolean;
};

export type ImageUploadResponse = {
  url: string;
};

export type DeleteProductResponse = Pick<BaseData, "id">;

export type ListMode = "all" | "best";
