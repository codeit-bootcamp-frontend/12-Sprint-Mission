import { BaseData } from "./common";

export type Article = BaseData & {
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  image: string;
  content: string;
  title: string;
  isLiked: boolean;
};

export type ImageUploadResponse = {
  url: string;
};

export type DeleteArticleResponse = Pick<BaseData, "id">;

export type ListMode = "all" | "best";
