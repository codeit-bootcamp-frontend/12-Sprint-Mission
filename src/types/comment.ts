import { User } from "./auth";

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
