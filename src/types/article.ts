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
};
