import { User } from "./auth";
import { BaseData } from "./common";

export type BoardName = "articles" | "products";

export type CommentList = {
  nextCursor: number;
  list: Comment[];
};

export type Comment = BaseData & {
  writer: User;
  content: string;
};

export type DeleteCommentResponse = Pick<BaseData, "id">;
