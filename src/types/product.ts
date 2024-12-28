export type Product = {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: Tags;
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
};

export type Tags = string[];

export type ProductList = {
  totalCount: number;
  list: Product[];
};
