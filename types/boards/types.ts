import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ItemWriter {
  id: number;
  nickname: string;
}

export interface Item {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  image: string | StaticImport;
  likeCount: number;
  writer: ItemWriter;
}
