import { User } from "./auth";

export type BoardName = "articles" | "products";

export type CommentList = {
  nextCursor: number;
  list: Comment[];
};

export type Comment = {
  writer: User;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

export type CommentFormData = {
  content: string;
};
